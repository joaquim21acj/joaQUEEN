defmodule ServerAPI.PageController do
  use ServerAPI.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
