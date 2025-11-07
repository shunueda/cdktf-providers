// https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls what API routes the agent token can access. Options: `all` (full access) or `no_user_data` (blocks `/external-auth`, `/gitsshkey`, and `/gitauth` routes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#api_key_scope Agent#api_key_scope}
  */
  readonly apiKeyScope?: string;
  /**
  * The architecture the agent will run on. Must be one of: `"amd64"`, `"armv7"`, `"arm64"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#arch Agent#arch}
  */
  readonly arch: string;
  /**
  * The authentication type the agent will use. Must be one of: `"token"`, `"google-instance-identity"`, `"aws-instance-identity"`, `"azure-instance-identity"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#auth Agent#auth}
  */
  readonly auth?: string;
  /**
  * Time in seconds until the agent is marked as timed out when a connection with the server cannot be established. A value of zero never marks the agent as timed out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#connection_timeout Agent#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * The starting directory when a user creates a shell session. Defaults to `"$HOME"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#dir Agent#dir}
  */
  readonly dir?: string;
  /**
  * A mapping of environment variables to set inside the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#env Agent#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#id Agent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path to a file within the workspace containing a message to display to users when they login via SSH. A typical value would be `"/etc/motd"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#motd_file Agent#motd_file}
  */
  readonly motdFile?: string;
  /**
  * The order determines the position of agents in the UI presentation. The lowest order is shown first and agents with equal order are sorted by name (ascending order).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#order Agent#order}
  */
  readonly order?: number;
  /**
  * The operating system the agent will run on. Must be one of: `"linux"`, `"darwin"`, or `"windows"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#os Agent#os}
  */
  readonly os: string;
  /**
  * A script to run before the agent is stopped. The script should exit when it is done to signal that the workspace can be stopped. This option is an alias for defining a `coder_script` resource with `run_on_stop` set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#shutdown_script Agent#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * A script to run after the agent starts. The script should exit when it is done to signal that the agent is ready. This option is an alias for defining a `coder_script` resource with `run_on_start` set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#startup_script Agent#startup_script}
  */
  readonly startupScript?: string;
  /**
  * This option sets the behavior of the `startup_script`. When set to `"blocking"`, the `startup_script` must exit before the workspace is ready. When set to `"non-blocking"`, the `startup_script` may run in the background and the workspace will be ready immediately. Default is `"non-blocking"`, although `"blocking"` is recommended. This option is an alias for defining a `coder_script` resource with `start_blocks_login` set to `true` (blocking).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#startup_script_behavior Agent#startup_script_behavior}
  */
  readonly startupScriptBehavior?: string;
  /**
  * A URL to a document with instructions for troubleshooting problems with the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#troubleshooting_url Agent#troubleshooting_url}
  */
  readonly troubleshootingUrl?: string;
  /**
  * display_apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#display_apps Agent#display_apps}
  */
  readonly displayApps?: AgentDisplayApps;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#metadata Agent#metadata}
  */
  readonly metadata?: AgentMetadata[] | cdktf.IResolvable;
  /**
  * resources_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#resources_monitoring Agent#resources_monitoring}
  */
  readonly resourcesMonitoring?: AgentResourcesMonitoring;
}
export interface AgentDisplayApps {
  /**
  * Display the port-forwarding helper button in the agent bar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#port_forwarding_helper Agent#port_forwarding_helper}
  */
  readonly portForwardingHelper?: boolean | cdktf.IResolvable;
  /**
  * Display the SSH helper button in the agent bar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#ssh_helper Agent#ssh_helper}
  */
  readonly sshHelper?: boolean | cdktf.IResolvable;
  /**
  * Display the VSCode Desktop app in the agent bar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#vscode Agent#vscode}
  */
  readonly vscode?: boolean | cdktf.IResolvable;
  /**
  * Display the VSCode Insiders app in the agent bar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#vscode_insiders Agent#vscode_insiders}
  */
  readonly vscodeInsiders?: boolean | cdktf.IResolvable;
  /**
  * Display the web terminal app in the agent bar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#web_terminal Agent#web_terminal}
  */
  readonly webTerminal?: boolean | cdktf.IResolvable;
}

export function agentDisplayAppsToTerraform(struct?: AgentDisplayAppsOutputReference | AgentDisplayApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_forwarding_helper: cdktf.booleanToTerraform(struct!.portForwardingHelper),
    ssh_helper: cdktf.booleanToTerraform(struct!.sshHelper),
    vscode: cdktf.booleanToTerraform(struct!.vscode),
    vscode_insiders: cdktf.booleanToTerraform(struct!.vscodeInsiders),
    web_terminal: cdktf.booleanToTerraform(struct!.webTerminal),
  }
}


export function agentDisplayAppsToHclTerraform(struct?: AgentDisplayAppsOutputReference | AgentDisplayApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_forwarding_helper: {
      value: cdktf.booleanToHclTerraform(struct!.portForwardingHelper),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_helper: {
      value: cdktf.booleanToHclTerraform(struct!.sshHelper),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vscode: {
      value: cdktf.booleanToHclTerraform(struct!.vscode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vscode_insiders: {
      value: cdktf.booleanToHclTerraform(struct!.vscodeInsiders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_terminal: {
      value: cdktf.booleanToHclTerraform(struct!.webTerminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentDisplayAppsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentDisplayApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portForwardingHelper !== undefined) {
      hasAnyValues = true;
      internalValueResult.portForwardingHelper = this._portForwardingHelper;
    }
    if (this._sshHelper !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshHelper = this._sshHelper;
    }
    if (this._vscode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vscode = this._vscode;
    }
    if (this._vscodeInsiders !== undefined) {
      hasAnyValues = true;
      internalValueResult.vscodeInsiders = this._vscodeInsiders;
    }
    if (this._webTerminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.webTerminal = this._webTerminal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentDisplayApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portForwardingHelper = undefined;
      this._sshHelper = undefined;
      this._vscode = undefined;
      this._vscodeInsiders = undefined;
      this._webTerminal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portForwardingHelper = value.portForwardingHelper;
      this._sshHelper = value.sshHelper;
      this._vscode = value.vscode;
      this._vscodeInsiders = value.vscodeInsiders;
      this._webTerminal = value.webTerminal;
    }
  }

  // port_forwarding_helper - computed: false, optional: true, required: false
  private _portForwardingHelper?: boolean | cdktf.IResolvable; 
  public get portForwardingHelper() {
    return this.getBooleanAttribute('port_forwarding_helper');
  }
  public set portForwardingHelper(value: boolean | cdktf.IResolvable) {
    this._portForwardingHelper = value;
  }
  public resetPortForwardingHelper() {
    this._portForwardingHelper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardingHelperInput() {
    return this._portForwardingHelper;
  }

  // ssh_helper - computed: false, optional: true, required: false
  private _sshHelper?: boolean | cdktf.IResolvable; 
  public get sshHelper() {
    return this.getBooleanAttribute('ssh_helper');
  }
  public set sshHelper(value: boolean | cdktf.IResolvable) {
    this._sshHelper = value;
  }
  public resetSshHelper() {
    this._sshHelper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHelperInput() {
    return this._sshHelper;
  }

  // vscode - computed: false, optional: true, required: false
  private _vscode?: boolean | cdktf.IResolvable; 
  public get vscode() {
    return this.getBooleanAttribute('vscode');
  }
  public set vscode(value: boolean | cdktf.IResolvable) {
    this._vscode = value;
  }
  public resetVscode() {
    this._vscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vscodeInput() {
    return this._vscode;
  }

  // vscode_insiders - computed: false, optional: true, required: false
  private _vscodeInsiders?: boolean | cdktf.IResolvable; 
  public get vscodeInsiders() {
    return this.getBooleanAttribute('vscode_insiders');
  }
  public set vscodeInsiders(value: boolean | cdktf.IResolvable) {
    this._vscodeInsiders = value;
  }
  public resetVscodeInsiders() {
    this._vscodeInsiders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vscodeInsidersInput() {
    return this._vscodeInsiders;
  }

  // web_terminal - computed: false, optional: true, required: false
  private _webTerminal?: boolean | cdktf.IResolvable; 
  public get webTerminal() {
    return this.getBooleanAttribute('web_terminal');
  }
  public set webTerminal(value: boolean | cdktf.IResolvable) {
    this._webTerminal = value;
  }
  public resetWebTerminal() {
    this._webTerminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webTerminalInput() {
    return this._webTerminal;
  }
}
export interface AgentMetadata {
  /**
  * The user-facing name of this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#display_name Agent#display_name}
  */
  readonly displayName?: string;
  /**
  * The interval in seconds at which to refresh this metadata item. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#interval Agent#interval}
  */
  readonly interval: number;
  /**
  * The key of this metadata item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#key Agent#key}
  */
  readonly key: string;
  /**
  * The order determines the position of agent metadata in the UI presentation. The lowest order is shown first and metadata with equal order are sorted by key (ascending order).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#order Agent#order}
  */
  readonly order?: number;
  /**
  * The script that retrieves the value of this metadata item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#script Agent#script}
  */
  readonly script: string;
  /**
  * The maximum time the command is allowed to run in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#timeout Agent#timeout}
  */
  readonly timeout?: number;
}

export function agentMetadataToTerraform(struct?: AgentMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    interval: cdktf.numberToTerraform(struct!.interval),
    key: cdktf.stringToTerraform(struct!.key),
    order: cdktf.numberToTerraform(struct!.order),
    script: cdktf.stringToTerraform(struct!.script),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function agentMetadataToHclTerraform(struct?: AgentMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgentMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._interval = undefined;
      this._key = undefined;
      this._order = undefined;
      this._script = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._interval = value.interval;
      this._key = value.key;
      this._order = value.order;
      this._script = value.script;
      this._timeout = value.timeout;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class AgentMetadataList extends cdktf.ComplexList {
  public internalValue? : AgentMetadata[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgentMetadataOutputReference {
    return new AgentMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgentResourcesMonitoringMemory {
  /**
  * Enable memory monitoring for this agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#enabled Agent#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The memory usage threshold in percentage at which to trigger an alert. Value should be between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#threshold Agent#threshold}
  */
  readonly threshold: number;
}

export function agentResourcesMonitoringMemoryToTerraform(struct?: AgentResourcesMonitoringMemoryOutputReference | AgentResourcesMonitoringMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function agentResourcesMonitoringMemoryToHclTerraform(struct?: AgentResourcesMonitoringMemoryOutputReference | AgentResourcesMonitoringMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentResourcesMonitoringMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentResourcesMonitoringMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentResourcesMonitoringMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._threshold = value.threshold;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface AgentResourcesMonitoringVolume {
  /**
  * Enable volume monitoring for this agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#enabled Agent#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The path of the volume to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#path Agent#path}
  */
  readonly path: string;
  /**
  * The volume usage threshold in percentage at which to trigger an alert. Value should be between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#threshold Agent#threshold}
  */
  readonly threshold: number;
}

export function agentResourcesMonitoringVolumeToTerraform(struct?: AgentResourcesMonitoringVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    path: cdktf.stringToTerraform(struct!.path),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function agentResourcesMonitoringVolumeToHclTerraform(struct?: AgentResourcesMonitoringVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentResourcesMonitoringVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgentResourcesMonitoringVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentResourcesMonitoringVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._path = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._path = value.path;
      this._threshold = value.threshold;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class AgentResourcesMonitoringVolumeList extends cdktf.ComplexList {
  public internalValue? : AgentResourcesMonitoringVolume[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgentResourcesMonitoringVolumeOutputReference {
    return new AgentResourcesMonitoringVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgentResourcesMonitoring {
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#memory Agent#memory}
  */
  readonly memory?: AgentResourcesMonitoringMemory;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#volume Agent#volume}
  */
  readonly volume?: AgentResourcesMonitoringVolume[] | cdktf.IResolvable;
}

export function agentResourcesMonitoringToTerraform(struct?: AgentResourcesMonitoringOutputReference | AgentResourcesMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory: agentResourcesMonitoringMemoryToTerraform(struct!.memory),
    volume: cdktf.listMapper(agentResourcesMonitoringVolumeToTerraform, true)(struct!.volume),
  }
}


export function agentResourcesMonitoringToHclTerraform(struct?: AgentResourcesMonitoringOutputReference | AgentResourcesMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory: {
      value: agentResourcesMonitoringMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "set",
      storageClassType: "AgentResourcesMonitoringMemoryList",
    },
    volume: {
      value: cdktf.listMapperHcl(agentResourcesMonitoringVolumeToHclTerraform, true)(struct!.volume),
      isBlock: true,
      type: "set",
      storageClassType: "AgentResourcesMonitoringVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentResourcesMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentResourcesMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentResourcesMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memory.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memory.internalValue = value.memory;
      this._volume.internalValue = value.volume;
    }
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new AgentResourcesMonitoringMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: AgentResourcesMonitoringMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new AgentResourcesMonitoringVolumeList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: AgentResourcesMonitoringVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent coder_agent}
*/
export class Agent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coder_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Agent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Agent to import
  * @param importFromId The id of the existing Agent that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Agent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coder_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/agent coder_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentConfig
  */
  public constructor(scope: Construct, id: string, config: AgentConfig) {
    super(scope, id, {
      terraformResourceType: 'coder_agent',
      terraformGeneratorMetadata: {
        providerName: 'coder',
        providerVersion: '2.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKeyScope = config.apiKeyScope;
    this._arch = config.arch;
    this._auth = config.auth;
    this._connectionTimeout = config.connectionTimeout;
    this._dir = config.dir;
    this._env = config.env;
    this._id = config.id;
    this._motdFile = config.motdFile;
    this._order = config.order;
    this._os = config.os;
    this._shutdownScript = config.shutdownScript;
    this._startupScript = config.startupScript;
    this._startupScriptBehavior = config.startupScriptBehavior;
    this._troubleshootingUrl = config.troubleshootingUrl;
    this._displayApps.internalValue = config.displayApps;
    this._metadata.internalValue = config.metadata;
    this._resourcesMonitoring.internalValue = config.resourcesMonitoring;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_scope - computed: false, optional: true, required: false
  private _apiKeyScope?: string; 
  public get apiKeyScope() {
    return this.getStringAttribute('api_key_scope');
  }
  public set apiKeyScope(value: string) {
    this._apiKeyScope = value;
  }
  public resetApiKeyScope() {
    this._apiKeyScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyScopeInput() {
    return this._apiKeyScope;
  }

  // arch - computed: false, optional: false, required: true
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // init_script - computed: true, optional: false, required: false
  public get initScript() {
    return this.getStringAttribute('init_script');
  }

  // motd_file - computed: false, optional: true, required: false
  private _motdFile?: string; 
  public get motdFile() {
    return this.getStringAttribute('motd_file');
  }
  public set motdFile(value: string) {
    this._motdFile = value;
  }
  public resetMotdFile() {
    this._motdFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdFileInput() {
    return this._motdFile;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // shutdown_script - computed: false, optional: true, required: false
  private _shutdownScript?: string; 
  public get shutdownScript() {
    return this.getStringAttribute('shutdown_script');
  }
  public set shutdownScript(value: string) {
    this._shutdownScript = value;
  }
  public resetShutdownScript() {
    this._shutdownScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownScriptInput() {
    return this._shutdownScript;
  }

  // startup_script - computed: false, optional: true, required: false
  private _startupScript?: string; 
  public get startupScript() {
    return this.getStringAttribute('startup_script');
  }
  public set startupScript(value: string) {
    this._startupScript = value;
  }
  public resetStartupScript() {
    this._startupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptInput() {
    return this._startupScript;
  }

  // startup_script_behavior - computed: false, optional: true, required: false
  private _startupScriptBehavior?: string; 
  public get startupScriptBehavior() {
    return this.getStringAttribute('startup_script_behavior');
  }
  public set startupScriptBehavior(value: string) {
    this._startupScriptBehavior = value;
  }
  public resetStartupScriptBehavior() {
    this._startupScriptBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptBehaviorInput() {
    return this._startupScriptBehavior;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // troubleshooting_url - computed: false, optional: true, required: false
  private _troubleshootingUrl?: string; 
  public get troubleshootingUrl() {
    return this.getStringAttribute('troubleshooting_url');
  }
  public set troubleshootingUrl(value: string) {
    this._troubleshootingUrl = value;
  }
  public resetTroubleshootingUrl() {
    this._troubleshootingUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get troubleshootingUrlInput() {
    return this._troubleshootingUrl;
  }

  // display_apps - computed: false, optional: true, required: false
  private _displayApps = new AgentDisplayAppsOutputReference(this, "display_apps");
  public get displayApps() {
    return this._displayApps;
  }
  public putDisplayApps(value: AgentDisplayApps) {
    this._displayApps.internalValue = value;
  }
  public resetDisplayApps() {
    this._displayApps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayAppsInput() {
    return this._displayApps.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AgentMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AgentMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // resources_monitoring - computed: false, optional: true, required: false
  private _resourcesMonitoring = new AgentResourcesMonitoringOutputReference(this, "resources_monitoring");
  public get resourcesMonitoring() {
    return this._resourcesMonitoring;
  }
  public putResourcesMonitoring(value: AgentResourcesMonitoring) {
    this._resourcesMonitoring.internalValue = value;
  }
  public resetResourcesMonitoring() {
    this._resourcesMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesMonitoringInput() {
    return this._resourcesMonitoring.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_scope: cdktf.stringToTerraform(this._apiKeyScope),
      arch: cdktf.stringToTerraform(this._arch),
      auth: cdktf.stringToTerraform(this._auth),
      connection_timeout: cdktf.numberToTerraform(this._connectionTimeout),
      dir: cdktf.stringToTerraform(this._dir),
      env: cdktf.hashMapper(cdktf.stringToTerraform)(this._env),
      id: cdktf.stringToTerraform(this._id),
      motd_file: cdktf.stringToTerraform(this._motdFile),
      order: cdktf.numberToTerraform(this._order),
      os: cdktf.stringToTerraform(this._os),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      startup_script: cdktf.stringToTerraform(this._startupScript),
      startup_script_behavior: cdktf.stringToTerraform(this._startupScriptBehavior),
      troubleshooting_url: cdktf.stringToTerraform(this._troubleshootingUrl),
      display_apps: agentDisplayAppsToTerraform(this._displayApps.internalValue),
      metadata: cdktf.listMapper(agentMetadataToTerraform, true)(this._metadata.internalValue),
      resources_monitoring: agentResourcesMonitoringToTerraform(this._resourcesMonitoring.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key_scope: {
        value: cdktf.stringToHclTerraform(this._apiKeyScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arch: {
        value: cdktf.stringToHclTerraform(this._arch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dir: {
        value: cdktf.stringToHclTerraform(this._dir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._env),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      motd_file: {
        value: cdktf.stringToHclTerraform(this._motdFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown_script: {
        value: cdktf.stringToHclTerraform(this._shutdownScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_script: {
        value: cdktf.stringToHclTerraform(this._startupScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_script_behavior: {
        value: cdktf.stringToHclTerraform(this._startupScriptBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      troubleshooting_url: {
        value: cdktf.stringToHclTerraform(this._troubleshootingUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_apps: {
        value: agentDisplayAppsToHclTerraform(this._displayApps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentDisplayAppsList",
      },
      metadata: {
        value: cdktf.listMapperHcl(agentMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgentMetadataList",
      },
      resources_monitoring: {
        value: agentResourcesMonitoringToHclTerraform(this._resourcesMonitoring.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentResourcesMonitoringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
