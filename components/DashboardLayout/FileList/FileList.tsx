import style from "@/styles/dashboard/filelist.module.scss";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { iCompList } from "@/types";

export default function FileList(props: {
  title: string;
  fileType: string;
  url: any;
  showModal: any;
  deleteable: boolean;
}) {
  const [isActive, setActive] = useState(false);

  const fetcher = async () => {
    let data = {};
    let body = JSON.stringify({
      id: props.fileType as string,
      eid: "649348672a0bac5858c7ac95",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/getfilebycat",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    };

    const req = await axios
      .request(config)
      .then((response: { data: any }) => {
        // console.log(response.data);
        if (response.data.success) {
          data = response.data;
        }
      })
      .catch((error: any) => {
        // console.log(error);
      });

    return data;
  };

  const { data, error } = useSWR(props.fileType as string, fetcher);

  const result = data as iCompList;

  const handleDelete = async (fileID: string) => {
    const confirmDelete = confirm("Do you really want to delete this entry?");

    if (confirmDelete) {
      // alert("Delete");
      let request = axios
        .request({
          method: "post",
          maxBodyLength: Infinity,
          url: "/api/deletefile",
          headers: {
            "Content-Type": "application/json",
          },
          data: { id: fileID },
        })
        .then((response) => {
          // console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  if (error) {
    return (
      <>
        <p>An error occurred</p>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <section
          className={`${style.file_list_wrapper} ${
            isActive ? style.active : ""
          }`}
        >
          <div
            className={`${style.title_wrapper}`}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <h1 className={`${style.title}`}>Loading...</h1>
          </div>
        </section>
      </>
    );
  }
  if (data) {
    return (
      <>
        <section
          className={`${style.file_list_wrapper} ${
            isActive ? style.active : ""
          }`}
        >
          <div
            className={`${style.title_wrapper}`}
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <h1 className={`${style.title}`}>{props.title}</h1>
            <span className={`${style.expand_btn}`}>
              <i
                className={`${style.icon} icon-arrows_bottom_chevron_direction_move_icon`}
              ></i>
            </span>
          </div>
          <div className={`${style.grid_wrapper}`}>
            <ul className={style.grid_list}>
              {result.result.length > 0 ? (
                result.result.map(
                  (ev: { _id: string; title: string; file: string }) => {
                    return (
                      <>
                        <li
                          key={ev._id}
                          data-url={ev.file}
                          className={`${
                            props.deleteable ? style.deleteable : " "
                          }`}
                        >
                          {ev.title}
                          <span>
                            <span
                              onClick={() => {
                                props.url(ev.file);
                                props.showModal(true);
                              }}
                              className={`${style.icon} icon-eye_view_icon`}
                              title="View File"
                            ></span>
                            {props.deleteable && (
                              <span
                                className={`${
                                  style.icon + " " + style.delete
                                } icon-close`}
                                title="Delete File"
                                onClick={() => {
                                  handleDelete(ev._id);
                                }}
                              ></span>
                            )}
                          </span>
                        </li>
                      </>
                    );
                  }
                )
              ) : (
                <li
                  style={{
                    textAlign: "center",
                    maxWidth: "100%",
                    flex: "100%",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                  }}
                >
                  <b>No Entries Found</b>
                </li>
              )}
            </ul>
          </div>
        </section>
      </>
    );
  }
}
