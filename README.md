1.자신이 개발한 앱에 대한 설명
    The to-do list app allows you to keep track of the tasks you have completed or have yet to complete. 
    할 일 목록 앱을 사용하면 완료한 일이나 아직 해야 할 일을 추적할 수 있습니다.

    Just add a title and press Enter. 
    제목을 추가하고 Enter를 누르세요.

    If necessary, you can edit the title, mark it as completed, or clear the list of completed tasks. 
    필요한 경우 제목을 편집하거나, 완료로 표시하거나, 완료된 작업 목록을 지울 수 있습니다.
    
    There is also a filter to make it easier to track the progress
    프로세스 진행 상황을 보다 편리하게 모니터링할 수 있도록 필터도 제공됩니다.

2.소스 빌드 및 실행 방법 메뉴얼
    The project is already deployed on Vercel.
    해당 프로젝트는 이미 Vercel에 게시되었습니다.
    But you can download the repository and run it locally using the start script.
    그러나 저장소를 다운로드하고 시작 스크립트를 사용하여 로컬로 실행할 수 있습니다.

3.주력으로 사용한 컴포넌트에대한 설명 및 사용 이유 기입
    At the top of the page, there is a form for creating new tasks - NewTaskForm
    페이지 상단에는 새 작업을 생성하기 위한 양식이 있습니다 - NewTaskForm

    Footer is used to place filters and general information about the task list.
    Footer은 할 일 목록에 대한 필터와 일반 정보를 배치하는 데 사용됩니다.
    It also includes the TasksFilter component, which stores the filtering logic.
    또한 필터링 논리를 저장하는 TasksFilter 구성 요소도 포함되어 있습니다.

    The other main components are TaskList, which places created tasks in itself - the Task component.
     나머지 주요 구성 요소는 생성된 작업(Task 구성 요소)을 포함하는 TaskList입니다.

    And a component that is displayed during conditional rendering - EditTask to change the name of the task.
    그리고 조건부 렌더링 시 표시되는 컴포넌트는 태스크 이름을 변경하는 EditTask 입니다.

    
    
 