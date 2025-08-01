"use client";

import { ActionStep, TOOL } from "@/typings/agent";
import {
  AudioLines,
  ChevronDown,
  ChevronUp,
  Code,
  FileAudio,
  FileText,
  Globe,
  ImageIcon,
  Lightbulb,
  LoaderCircle,
  MousePointerClick,
  SearchCheck,
  Rocket,
  RotateCcw,
  Search,
  Sparkle,
  Terminal,
  Video,
  Presentation,
  Unplug,
  Eye,
  X,
  SquareChevronRight,
  Database,
  Key,
} from "lucide-react";
import { useEffect, useMemo, useRef } from "react";

interface ActionProps {
  workspaceInfo: string;
  type: TOOL;
  value: ActionStep["data"];
  onClick: () => void;
}

const Action = ({ workspaceInfo, type, value, onClick }: ActionProps) => {
  // Use a ref to track if this component has already been animated
  const hasAnimated = useRef(false);

  // Set hasAnimated to true after first render
  useEffect(() => {
    hasAnimated.current = true;
  }, []);

  const step_icon = useMemo(() => {
    const className = "h-4 w-4 text-neutral-100 flex-shrink-0 mt-[2px]";
    switch (type) {
      case TOOL.SEQUENTIAL_THINKING:
      case TOOL.MESSAGE_USER:
        return <Lightbulb className={className} />;
      case TOOL.WEB_SEARCH:
        return <Search className={className} />;
      case TOOL.GET_DATABASE_CONNECTION:
        return <Database className={className} />;
      case TOOL.GET_OPENAI_KEY:
        return <Key className={className} />;
      case TOOL.IMAGE_SEARCH:
        return <ImageIcon className={className} />;
      case TOOL.VISIT:
      case TOOL.BROWSER_USE:
        return <Globe className={className} />;
      case TOOL.SHELL_EXEC:
        return <Terminal className={className} />;
      case TOOL.SHELL_WRITE_TO_PROCESS:
        return <Terminal className={className} />;
      case TOOL.SHELL_KILL_PROCESS:
        return <X className={className} />;
      case TOOL.SHELL_VIEW:
        return <Eye className={className} />;
      case TOOL.SHELL_WAIT:
        return <LoaderCircle className={className} />;
      case TOOL.STR_REPLACE_EDITOR:
        return <Code className={className} />;
      case TOOL.STATIC_DEPLOY:
        return <Rocket className={className} />;
      case TOOL.REGISTER_DEPLOYMENT:
        return <Unplug className={className} />;
      case TOOL.PDF_TEXT_EXTRACT:
        return <FileText className={className} />;
      case TOOL.AUDIO_TRANSCRIBE:
        return <FileAudio className={className} />;
      case TOOL.GENERATE_AUDIO_RESPONSE:
        return <AudioLines className={className} />;
      case TOOL.VIDEO_GENERATE:
      case TOOL.VIDEO_GENERATE_FROM_IMAGE:
      case TOOL.LONG_VIDEO_GENERATE:
      case TOOL.LONG_VIDEO_GENERATE_FROM_IMAGE:
        return <Video className={className} />;
      case TOOL.IMAGE_GENERATE:
        return <ImageIcon className={className} />;
      case TOOL.DEEP_RESEARCH:
        return <Sparkle className={className} />;
      case TOOL.PRESENTATION:
        return <Presentation className={className} />;
      case TOOL.FULLSTACK_PROJECT_INIT:
        return <SquareChevronRight className={className} />;
      case TOOL.REVIEWER_AGENT:
        return <SearchCheck className={className} />;

      case TOOL.BROWSER_WAIT:
        return <LoaderCircle className={className} />;
      case TOOL.BROWSER_VIEW:
        return <Globe className={className} />;
      case TOOL.BROWSER_NAVIGATION:
        return <Globe className={className} />;
      case TOOL.BROWSER_RESTART:
        return <RotateCcw className={className} />;
      case TOOL.BROWSER_SCROLL_DOWN:
        return <ChevronDown className={className} />;
      case TOOL.BROWSER_SCROLL_UP:
        return <ChevronUp className={className} />;
      case TOOL.BROWSER_CLICK:
        return <MousePointerClick className={className} />;
      case TOOL.BROWSER_ENTER_TEXT:
        return <Globe className={className} />;
      case TOOL.BROWSER_PRESS_KEY:
        return <Globe className={className} />;
      case TOOL.BROWSER_GET_SELECT_OPTIONS:
        return <Globe className={className} />;
      case TOOL.BROWSER_SELECT_DROPDOWN_OPTION:
        return <Globe className={className} />;
      case TOOL.BROWSER_SWITCH_TAB:
        return <Globe className={className} />;
      case TOOL.BROWSER_OPEN_NEW_TAB:
        return <Globe className={className} />;
      case TOOL.BROWSER_VIEW_INTERACTIVE_ELEMENTS:
        return <MousePointerClick className={className} />;

      default:
        return <></>;
    }
  }, [type]);

  const step_title = useMemo(() => {
    switch (type) {
      case TOOL.SEQUENTIAL_THINKING:
      case TOOL.MESSAGE_USER:
        return "Thinking";
      case TOOL.WEB_SEARCH:
        return "Searching";
      case TOOL.IMAGE_SEARCH:
        return "Searching for Images";
      case TOOL.GET_DATABASE_CONNECTION:
        return "Getting Database Connection";
      case TOOL.GET_OPENAI_KEY:
        return "Getting OpenAI Key";
      case TOOL.VISIT:
      case TOOL.BROWSER_USE:
        return "Browsing";
      case TOOL.SHELL_EXEC:
        return "Executing Command";
      case TOOL.SHELL_WRITE_TO_PROCESS:
        return "Writing to terminal";
      case TOOL.SHELL_KILL_PROCESS:
        return "Killing Process";
      case TOOL.SHELL_VIEW:
        return "Viewing Shell";
      case TOOL.SHELL_WAIT:
        return "Waiting for Shell";
      case TOOL.STR_REPLACE_EDITOR:
        return value?.tool_input?.command === "create"
          ? "Creating File"
          : value?.tool_input?.command === "view"
          ? "Viewing File"
          : "Editing File";
      case TOOL.STATIC_DEPLOY:
        return "Deploying";
      case TOOL.REGISTER_DEPLOYMENT:
        return "Registering Deployment";
      case TOOL.PDF_TEXT_EXTRACT:
        return "Extracting Text";
      case TOOL.AUDIO_TRANSCRIBE:
        return "Transcribing Audio";
      case TOOL.GENERATE_AUDIO_RESPONSE:
        return "Generating Audio";
      case TOOL.VIDEO_GENERATE:
        return "Generating Video";
      case TOOL.VIDEO_GENERATE_FROM_IMAGE:
        return "Generating Video from Image";
      case TOOL.LONG_VIDEO_GENERATE:
        return "Generating Long Video from Text";
      case TOOL.LONG_VIDEO_GENERATE_FROM_IMAGE:
        return "Generating Long Video from Image";
      case TOOL.IMAGE_GENERATE:
        return "Generating Image";
      case TOOL.DEEP_RESEARCH:
        return "Deep Researching";
      case TOOL.PRESENTATION:
        return "Using presentation agent";
      case TOOL.FULLSTACK_PROJECT_INIT:
        return "Starting up project template";
      case TOOL.REVIEWER_AGENT:
        return "Reviewer agent";
      case TOOL.BROWSER_WAIT:
        return "Waiting for Page to Load";
      case TOOL.BROWSER_VIEW:
        return "Viewing Page";
      case TOOL.BROWSER_NAVIGATION:
        return "Navigating to URL";
      case TOOL.BROWSER_RESTART:
        return "Restarting Browser";
      case TOOL.BROWSER_SCROLL_DOWN:
        return "Scrolling Down";
      case TOOL.BROWSER_SCROLL_UP:
        return "Scrolling Up";
      case TOOL.BROWSER_CLICK:
        return "Clicking Element";
      case TOOL.BROWSER_ENTER_TEXT:
        return "Entering Text";
      case TOOL.BROWSER_PRESS_KEY:
        return "Pressing Key";
      case TOOL.BROWSER_GET_SELECT_OPTIONS:
        return "Getting Select Options";
      case TOOL.BROWSER_SELECT_DROPDOWN_OPTION:
        return "Selecting Dropdown Option";
      case TOOL.BROWSER_SWITCH_TAB:
        return "Switching Tab";
      case TOOL.BROWSER_OPEN_NEW_TAB:
        return "Opening New Tab";
      case TOOL.BROWSER_VIEW_INTERACTIVE_ELEMENTS:
        return "Viewing Interactive Elements";

      default:
        return type;
    }
  }, [type, value?.tool_input?.command]);

  const step_value = useMemo(() => {
    switch (type) {
      case TOOL.SEQUENTIAL_THINKING:
      case TOOL.MESSAGE_USER:
        return value.tool_input?.thought;
      case TOOL.GET_DATABASE_CONNECTION:
        return value.tool_input?.database_type;
      case TOOL.WEB_SEARCH:
        return value.tool_input?.query;
      case TOOL.IMAGE_SEARCH:
        return value.tool_input?.query;
      case TOOL.VISIT:
        return value.tool_input?.url;
      case TOOL.BROWSER_USE:
        return value.tool_input?.url;
      case TOOL.SHELL_EXEC:
        return value.tool_input?.command;
      case TOOL.SHELL_WRITE_TO_PROCESS:
        return value.tool_input?.input;
      case TOOL.SHELL_KILL_PROCESS:
        return value.tool_input?.session_id;
      case TOOL.SHELL_VIEW:
        return value.tool_input?.session_id;
      case TOOL.SHELL_WAIT:
        return value.tool_input?.seconds + " seconds";
      case TOOL.STR_REPLACE_EDITOR:
        return value.tool_input?.path === workspaceInfo
          ? workspaceInfo
          : value.tool_input?.path?.replace(workspaceInfo, "");
      case TOOL.STATIC_DEPLOY:
        return value.tool_input?.file_path === workspaceInfo
          ? workspaceInfo
          : value.tool_input?.file_path?.replace(workspaceInfo, "");
      case TOOL.PDF_TEXT_EXTRACT:
        return value.tool_input?.file_path === workspaceInfo
          ? workspaceInfo
          : value.tool_input?.file_path?.replace(workspaceInfo, "");
      case TOOL.AUDIO_TRANSCRIBE:
        return value.tool_input?.file_path === workspaceInfo
          ? workspaceInfo
          : value.tool_input?.file_path?.replace(workspaceInfo, "");
      case TOOL.GENERATE_AUDIO_RESPONSE:
        return value.tool_input?.output_filename === workspaceInfo
          ? workspaceInfo
          : value.tool_input?.output_filename?.replace(workspaceInfo, "");
      case TOOL.VIDEO_GENERATE:
      case TOOL.VIDEO_GENERATE_FROM_IMAGE:
      case TOOL.LONG_VIDEO_GENERATE:
      case TOOL.LONG_VIDEO_GENERATE_FROM_IMAGE:
        return value.tool_input?.output_filename === workspaceInfo
          ? workspaceInfo
          : value.tool_input?.output_filename?.replace(workspaceInfo, "");
      case TOOL.IMAGE_GENERATE:
        return value.tool_input?.output_filename === workspaceInfo
          ? workspaceInfo
          : value.tool_input?.output_filename?.replace(workspaceInfo, "");
      case TOOL.DEEP_RESEARCH:
        return value.tool_input?.query;
      case TOOL.PRESENTATION:
        return value.tool_input?.action + ": " + value.tool_input?.description;
      case TOOL.FULLSTACK_PROJECT_INIT:
        return value.tool_input?.framework;
      case TOOL.REVIEWER_AGENT:
        return value.content;

      case TOOL.BROWSER_WAIT:
        return value.tool_input?.url;
      case TOOL.BROWSER_VIEW:
        return value.tool_input?.url;
      case TOOL.BROWSER_NAVIGATION:
        return value.tool_input?.url;
      case TOOL.BROWSER_RESTART:
        return value.tool_input?.url;
      case TOOL.BROWSER_SCROLL_DOWN:
        return value.tool_input?.url;
      case TOOL.BROWSER_SCROLL_UP:
        return value.tool_input?.url;
      case TOOL.BROWSER_CLICK:
        return value.tool_input?.url;
      case TOOL.BROWSER_ENTER_TEXT:
        return value.tool_input?.text;
      case TOOL.BROWSER_PRESS_KEY:
        return value.tool_input?.key;
      case TOOL.BROWSER_GET_SELECT_OPTIONS:
        return value.tool_input?.url;
      case TOOL.BROWSER_SELECT_DROPDOWN_OPTION:
        return value.tool_input?.url;
      case TOOL.BROWSER_SWITCH_TAB:
        return value.tool_input?.url;
      case TOOL.BROWSER_OPEN_NEW_TAB:
        return value.tool_input?.url;
      case TOOL.BROWSER_VIEW_INTERACTIVE_ELEMENTS:
        return value.tool_input?.url;

      default:
        break;
    }
  }, [type, value, workspaceInfo]);

  if (
    !type ||
    type === TOOL.COMPLETE ||
    type === TOOL.BROWSER_VIEW ||
    type === TOOL.LIST_HTML_LINKS ||
    type === TOOL.RETURN_CONTROL_TO_USER ||
    type === TOOL.SLIDE_DECK_INIT ||
    type === TOOL.SLIDE_DECK_COMPLETE ||
    type === TOOL.DISPLAY_IMAGE
  )
    return null;

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer flex items-start gap-2 px-3 py-2 bg-[#35363a] rounded-xl backdrop-blur-sm 
      shadow-sm
      transition-all duration-200 ease-out
      hover:bg-neutral-800
      hover:border-neutral-700
      hover:shadow-[0_2px_8px_rgba(0,0,0,0.24)]
      active:scale-[0.98] overflow-hidden
      ${hasAnimated.current ? "animate-none" : "animate-fadeIn"}`}
    >
      {step_icon}
      <div className="flex flex-col gap-1.5 text-sm">
        <span className="text-neutral-100 font-medium group-hover:text-white">
          {step_title}
        </span>
        <span className="text-neutral-400 font-medium truncate group-hover:text-neutral-300">
          {step_value}
        </span>
      </div>
    </div>
  );
};

export default Action;
