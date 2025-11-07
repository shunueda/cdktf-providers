// https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#agent Resource#agent}
  */
  readonly agent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#bastion_host Resource#bastion_host}
  */
  readonly bastionHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#bastion_password Resource#bastion_password}
  */
  readonly bastionPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#bastion_port Resource#bastion_port}
  */
  readonly bastionPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#bastion_private_key Resource#bastion_private_key}
  */
  readonly bastionPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#bastion_user Resource#bastion_user}
  */
  readonly bastionUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#commands Resource#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#commands_after_file_changes Resource#commands_after_file_changes}
  */
  readonly commandsAfterFileChanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#host Resource#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#host_private_key Resource#host_private_key}
  */
  readonly hostPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#host_user Resource#host_user}
  */
  readonly hostUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#id Resource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#ignore_no_supported_methods_remain Resource#ignore_no_supported_methods_remain}
  */
  readonly ignoreNoSupportedMethodsRemain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#password Resource#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#port Resource#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#pre_commands Resource#pre_commands}
  */
  readonly preCommands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#private_key Resource#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#retry_delay Resource#retry_delay}
  */
  readonly retryDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#timeout Resource#timeout}
  */
  readonly timeout?: string;
  /**
  * A map of arbitrary strings that, when changed, will force the 'hsdp_container_host_exec' resource to be replaced, re-running any associated commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#triggers Resource#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#user Resource#user}
  */
  readonly user?: string;
  /**
  * Determines when the commands is to be executed. Options are 'create' or 'destroy'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#when Resource#when}
  */
  readonly when?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#file Resource#file}
  */
  readonly file?: ResourceFile[] | cdktf.IResolvable;
}
export interface ResourceFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#content Resource#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#destination Resource#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#group Resource#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#owner Resource#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#permissions Resource#permissions}
  */
  readonly permissions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#source Resource#source}
  */
  readonly source?: string;
}

export function resourceFileToTerraform(struct?: ResourceFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    destination: cdktf.stringToTerraform(struct!.destination),
    group: cdktf.stringToTerraform(struct!.group),
    owner: cdktf.stringToTerraform(struct!.owner),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function resourceFileToHclTerraform(struct?: ResourceFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._destination = undefined;
      this._group = undefined;
      this._owner = undefined;
      this._permissions = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._destination = value.destination;
      this._group = value.group;
      this._owner = value.owner;
      this._permissions = value.permissions;
      this._source = value.source;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ResourceFileList extends cdktf.ComplexList {
  public internalValue? : ResourceFile[] | cdktf.IResolvable

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
  public get(index: number): ResourceFileOutputReference {
    return new ResourceFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource ssh_resource}
*/
export class Resource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ssh_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Resource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resource to import
  * @param importFromId The id of the existing Resource that should be imported. Refer to the {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ssh_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs/resources/resource ssh_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'ssh_resource',
      terraformGeneratorMetadata: {
        providerName: 'ssh',
        providerVersion: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agent = config.agent;
    this._bastionHost = config.bastionHost;
    this._bastionPassword = config.bastionPassword;
    this._bastionPort = config.bastionPort;
    this._bastionPrivateKey = config.bastionPrivateKey;
    this._bastionUser = config.bastionUser;
    this._commands = config.commands;
    this._commandsAfterFileChanges = config.commandsAfterFileChanges;
    this._host = config.host;
    this._hostPrivateKey = config.hostPrivateKey;
    this._hostUser = config.hostUser;
    this._id = config.id;
    this._ignoreNoSupportedMethodsRemain = config.ignoreNoSupportedMethodsRemain;
    this._password = config.password;
    this._port = config.port;
    this._preCommands = config.preCommands;
    this._privateKey = config.privateKey;
    this._retryDelay = config.retryDelay;
    this._timeout = config.timeout;
    this._triggers = config.triggers;
    this._user = config.user;
    this._when = config.when;
    this._file.internalValue = config.file;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent - computed: false, optional: true, required: false
  private _agent?: boolean | cdktf.IResolvable; 
  public get agent() {
    return this.getBooleanAttribute('agent');
  }
  public set agent(value: boolean | cdktf.IResolvable) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // bastion_host - computed: false, optional: true, required: false
  private _bastionHost?: string; 
  public get bastionHost() {
    return this.getStringAttribute('bastion_host');
  }
  public set bastionHost(value: string) {
    this._bastionHost = value;
  }
  public resetBastionHost() {
    this._bastionHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionHostInput() {
    return this._bastionHost;
  }

  // bastion_password - computed: false, optional: true, required: false
  private _bastionPassword?: string; 
  public get bastionPassword() {
    return this.getStringAttribute('bastion_password');
  }
  public set bastionPassword(value: string) {
    this._bastionPassword = value;
  }
  public resetBastionPassword() {
    this._bastionPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionPasswordInput() {
    return this._bastionPassword;
  }

  // bastion_port - computed: false, optional: true, required: false
  private _bastionPort?: string; 
  public get bastionPort() {
    return this.getStringAttribute('bastion_port');
  }
  public set bastionPort(value: string) {
    this._bastionPort = value;
  }
  public resetBastionPort() {
    this._bastionPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionPortInput() {
    return this._bastionPort;
  }

  // bastion_private_key - computed: false, optional: true, required: false
  private _bastionPrivateKey?: string; 
  public get bastionPrivateKey() {
    return this.getStringAttribute('bastion_private_key');
  }
  public set bastionPrivateKey(value: string) {
    this._bastionPrivateKey = value;
  }
  public resetBastionPrivateKey() {
    this._bastionPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionPrivateKeyInput() {
    return this._bastionPrivateKey;
  }

  // bastion_user - computed: false, optional: true, required: false
  private _bastionUser?: string; 
  public get bastionUser() {
    return this.getStringAttribute('bastion_user');
  }
  public set bastionUser(value: string) {
    this._bastionUser = value;
  }
  public resetBastionUser() {
    this._bastionUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionUserInput() {
    return this._bastionUser;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // commands_after_file_changes - computed: false, optional: true, required: false
  private _commandsAfterFileChanges?: boolean | cdktf.IResolvable; 
  public get commandsAfterFileChanges() {
    return this.getBooleanAttribute('commands_after_file_changes');
  }
  public set commandsAfterFileChanges(value: boolean | cdktf.IResolvable) {
    this._commandsAfterFileChanges = value;
  }
  public resetCommandsAfterFileChanges() {
    this._commandsAfterFileChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsAfterFileChangesInput() {
    return this._commandsAfterFileChanges;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_private_key - computed: false, optional: true, required: false
  private _hostPrivateKey?: string; 
  public get hostPrivateKey() {
    return this.getStringAttribute('host_private_key');
  }
  public set hostPrivateKey(value: string) {
    this._hostPrivateKey = value;
  }
  public resetHostPrivateKey() {
    this._hostPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPrivateKeyInput() {
    return this._hostPrivateKey;
  }

  // host_user - computed: false, optional: true, required: false
  private _hostUser?: string; 
  public get hostUser() {
    return this.getStringAttribute('host_user');
  }
  public set hostUser(value: string) {
    this._hostUser = value;
  }
  public resetHostUser() {
    this._hostUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUserInput() {
    return this._hostUser;
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

  // ignore_no_supported_methods_remain - computed: false, optional: true, required: false
  private _ignoreNoSupportedMethodsRemain?: boolean | cdktf.IResolvable; 
  public get ignoreNoSupportedMethodsRemain() {
    return this.getBooleanAttribute('ignore_no_supported_methods_remain');
  }
  public set ignoreNoSupportedMethodsRemain(value: boolean | cdktf.IResolvable) {
    this._ignoreNoSupportedMethodsRemain = value;
  }
  public resetIgnoreNoSupportedMethodsRemain() {
    this._ignoreNoSupportedMethodsRemain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNoSupportedMethodsRemainInput() {
    return this._ignoreNoSupportedMethodsRemain;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // pre_commands - computed: false, optional: true, required: false
  private _preCommands?: string[]; 
  public get preCommands() {
    return this.getListAttribute('pre_commands');
  }
  public set preCommands(value: string[]) {
    this._preCommands = value;
  }
  public resetPreCommands() {
    this._preCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preCommandsInput() {
    return this._preCommands;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // retry_delay - computed: false, optional: true, required: false
  private _retryDelay?: string; 
  public get retryDelay() {
    return this.getStringAttribute('retry_delay');
  }
  public set retryDelay(value: string) {
    this._retryDelay = value;
  }
  public resetRetryDelay() {
    this._retryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayInput() {
    return this._retryDelay;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // when - computed: false, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }

  // file - computed: false, optional: true, required: false
  private _file = new ResourceFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ResourceFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent: cdktf.booleanToTerraform(this._agent),
      bastion_host: cdktf.stringToTerraform(this._bastionHost),
      bastion_password: cdktf.stringToTerraform(this._bastionPassword),
      bastion_port: cdktf.stringToTerraform(this._bastionPort),
      bastion_private_key: cdktf.stringToTerraform(this._bastionPrivateKey),
      bastion_user: cdktf.stringToTerraform(this._bastionUser),
      commands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._commands),
      commands_after_file_changes: cdktf.booleanToTerraform(this._commandsAfterFileChanges),
      host: cdktf.stringToTerraform(this._host),
      host_private_key: cdktf.stringToTerraform(this._hostPrivateKey),
      host_user: cdktf.stringToTerraform(this._hostUser),
      id: cdktf.stringToTerraform(this._id),
      ignore_no_supported_methods_remain: cdktf.booleanToTerraform(this._ignoreNoSupportedMethodsRemain),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      pre_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preCommands),
      private_key: cdktf.stringToTerraform(this._privateKey),
      retry_delay: cdktf.stringToTerraform(this._retryDelay),
      timeout: cdktf.stringToTerraform(this._timeout),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      user: cdktf.stringToTerraform(this._user),
      when: cdktf.stringToTerraform(this._when),
      file: cdktf.listMapper(resourceFileToTerraform, true)(this._file.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent: {
        value: cdktf.booleanToHclTerraform(this._agent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bastion_host: {
        value: cdktf.stringToHclTerraform(this._bastionHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion_password: {
        value: cdktf.stringToHclTerraform(this._bastionPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion_port: {
        value: cdktf.stringToHclTerraform(this._bastionPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion_private_key: {
        value: cdktf.stringToHclTerraform(this._bastionPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion_user: {
        value: cdktf.stringToHclTerraform(this._bastionUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commands: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._commands),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      commands_after_file_changes: {
        value: cdktf.booleanToHclTerraform(this._commandsAfterFileChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_private_key: {
        value: cdktf.stringToHclTerraform(this._hostPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_user: {
        value: cdktf.stringToHclTerraform(this._hostUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_no_supported_methods_remain: {
        value: cdktf.booleanToHclTerraform(this._ignoreNoSupportedMethodsRemain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_commands: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preCommands),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_delay: {
        value: cdktf.stringToHclTerraform(this._retryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      when: {
        value: cdktf.stringToHclTerraform(this._when),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.listMapperHcl(resourceFileToHclTerraform, true)(this._file.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResourceFileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
