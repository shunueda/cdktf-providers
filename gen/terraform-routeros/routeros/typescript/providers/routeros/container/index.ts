// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#___path___ Container#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#___skip___ Container#___skip___}
  */
  readonly skip?: string;
  /**
  * Specify an interval at which Container will be restarted on Container failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#auto_restart_interval Container#auto_restart_interval}
  */
  readonly autoRestartInterval?: string;
  /**
  * Enables trust chain validation from local certificate store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#check_certificate Container#check_certificate}
  */
  readonly checkCertificate?: boolean | cdktf.IResolvable;
  /**
  * The main purpose of a CMD is to provide defaults for an executing container. These defaults can include an executable, or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#cmd Container#cmd}
  */
  readonly cmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#comment Container#comment}
  */
  readonly comment?: string;
  /**
  * Passes through physical device to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#devices Container#devices}
  */
  readonly devices?: string[];
  /**
  * Set custom DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#dns Container#dns}
  */
  readonly dns?: string;
  /**
  * Container NIS domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#domain_name Container#domain_name}
  */
  readonly domainName?: string;
  /**
  * An ENTRYPOINT allows to specify executable to run when starting container. Example: /bin/sh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#entrypoint Container#entrypoint}
  */
  readonly entrypoint?: string;
  /**
  * list of environmental variables (configured under /container envs ) to be used with container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#envlist Container#envlist}
  */
  readonly envlist?: string;
  /**
  * container *tar.gz tarball if the container is imported from a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#file Container#file}
  */
  readonly file?: string;
  /**
  * Container host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#hostname Container#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#id Container#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * veth interface to be used with the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#interface Container#interface}
  */
  readonly interface: string;
  /**
  * if set to yes, all container-generated output will be shown in the RouterOS log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#logging Container#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * RAM usage limit in bytes for a specific container (string value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#memory_high Container#memory_high}
  */
  readonly memoryHigh?: string;
  /**
  * Mounts from /container/mounts/ sub-menu to be used with this container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#mounts Container#mounts}
  */
  readonly mounts?: string[];
  /**
  * The container image name to be installed if an external registry is used (configured under /container/config set registry-url=...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#remote_image Container#remote_image}
  */
  readonly remoteImage?: string;
  /**
  * Used to save container store outside main memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#root_dir Container#root_dir}
  */
  readonly rootDir?: string;
  /**
  * Container state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#running Container#running}
  */
  readonly running?: boolean | cdktf.IResolvable;
  /**
  * Start the container on boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#start_on_boot Container#start_on_boot}
  */
  readonly startOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Signal to stop the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#stop_signal Container#stop_signal}
  */
  readonly stopSignal?: string;
  /**
  * Sets the username used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#user Container#user}
  */
  readonly user?: string;
  /**
  * The working directory for cmd entrypoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#workdir Container#workdir}
  */
  readonly workdir?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#timeouts Container#timeouts}
  */
  readonly timeouts?: ContainerTimeouts;
}
export interface ContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#create Container#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#delete Container#delete}
  */
  readonly delete?: string;
}

export function containerTimeoutsToTerraform(struct?: ContainerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function containerTimeoutsToHclTerraform(struct?: ContainerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container routeros_container}
*/
export class Container extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Container resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Container to import
  * @param importFromId The id of the existing Container that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Container to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/container routeros_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_container',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._autoRestartInterval = config.autoRestartInterval;
    this._checkCertificate = config.checkCertificate;
    this._cmd = config.cmd;
    this._comment = config.comment;
    this._devices = config.devices;
    this._dns = config.dns;
    this._domainName = config.domainName;
    this._entrypoint = config.entrypoint;
    this._envlist = config.envlist;
    this._file = config.file;
    this._hostname = config.hostname;
    this._id = config.id;
    this._interface = config.interface;
    this._logging = config.logging;
    this._memoryHigh = config.memoryHigh;
    this._mounts = config.mounts;
    this._remoteImage = config.remoteImage;
    this._rootDir = config.rootDir;
    this._running = config.running;
    this._startOnBoot = config.startOnBoot;
    this._stopSignal = config.stopSignal;
    this._user = config.user;
    this._workdir = config.workdir;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // arch - computed: true, optional: false, required: false
  public get arch() {
    return this.getStringAttribute('arch');
  }

  // auto_restart_interval - computed: false, optional: true, required: false
  private _autoRestartInterval?: string; 
  public get autoRestartInterval() {
    return this.getStringAttribute('auto_restart_interval');
  }
  public set autoRestartInterval(value: string) {
    this._autoRestartInterval = value;
  }
  public resetAutoRestartInterval() {
    this._autoRestartInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRestartIntervalInput() {
    return this._autoRestartInterval;
  }

  // check_certificate - computed: false, optional: true, required: false
  private _checkCertificate?: boolean | cdktf.IResolvable; 
  public get checkCertificate() {
    return this.getBooleanAttribute('check_certificate');
  }
  public set checkCertificate(value: boolean | cdktf.IResolvable) {
    this._checkCertificate = value;
  }
  public resetCheckCertificate() {
    this._checkCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkCertificateInput() {
    return this._checkCertificate;
  }

  // cmd - computed: false, optional: true, required: false
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return cdktf.Fn.tolist(this.getListAttribute('devices'));
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // entrypoint - computed: false, optional: true, required: false
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // envlist - computed: false, optional: true, required: false
  private _envlist?: string; 
  public get envlist() {
    return this.getStringAttribute('envlist');
  }
  public set envlist(value: string) {
    this._envlist = value;
  }
  public resetEnvlist() {
    this._envlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envlistInput() {
    return this._envlist;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // memory_high - computed: false, optional: true, required: false
  private _memoryHigh?: string; 
  public get memoryHigh() {
    return this.getStringAttribute('memory_high');
  }
  public set memoryHigh(value: string) {
    this._memoryHigh = value;
  }
  public resetMemoryHigh() {
    this._memoryHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryHighInput() {
    return this._memoryHigh;
  }

  // mounts - computed: false, optional: true, required: false
  private _mounts?: string[]; 
  public get mounts() {
    return cdktf.Fn.tolist(this.getListAttribute('mounts'));
  }
  public set mounts(value: string[]) {
    this._mounts = value;
  }
  public resetMounts() {
    this._mounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // remote_image - computed: false, optional: true, required: false
  private _remoteImage?: string; 
  public get remoteImage() {
    return this.getStringAttribute('remote_image');
  }
  public set remoteImage(value: string) {
    this._remoteImage = value;
  }
  public resetRemoteImage() {
    this._remoteImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteImageInput() {
    return this._remoteImage;
  }

  // root_dir - computed: false, optional: true, required: false
  private _rootDir?: string; 
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }
  public set rootDir(value: string) {
    this._rootDir = value;
  }
  public resetRootDir() {
    this._rootDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirInput() {
    return this._rootDir;
  }

  // running - computed: false, optional: true, required: false
  private _running?: boolean | cdktf.IResolvable; 
  public get running() {
    return this.getBooleanAttribute('running');
  }
  public set running(value: boolean | cdktf.IResolvable) {
    this._running = value;
  }
  public resetRunning() {
    this._running = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running;
  }

  // start_on_boot - computed: false, optional: true, required: false
  private _startOnBoot?: boolean | cdktf.IResolvable; 
  public get startOnBoot() {
    return this.getBooleanAttribute('start_on_boot');
  }
  public set startOnBoot(value: boolean | cdktf.IResolvable) {
    this._startOnBoot = value;
  }
  public resetStartOnBoot() {
    this._startOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOnBootInput() {
    return this._startOnBoot;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stop_signal - computed: false, optional: true, required: false
  private _stopSignal?: string; 
  public get stopSignal() {
    return this.getStringAttribute('stop_signal');
  }
  public set stopSignal(value: string) {
    this._stopSignal = value;
  }
  public resetStopSignal() {
    this._stopSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopSignalInput() {
    return this._stopSignal;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
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

  // workdir - computed: true, optional: true, required: false
  private _workdir?: string; 
  public get workdir() {
    return this.getStringAttribute('workdir');
  }
  public set workdir(value: string) {
    this._workdir = value;
  }
  public resetWorkdir() {
    this._workdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdirInput() {
    return this._workdir;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      auto_restart_interval: cdktf.stringToTerraform(this._autoRestartInterval),
      check_certificate: cdktf.booleanToTerraform(this._checkCertificate),
      cmd: cdktf.stringToTerraform(this._cmd),
      comment: cdktf.stringToTerraform(this._comment),
      devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devices),
      dns: cdktf.stringToTerraform(this._dns),
      domain_name: cdktf.stringToTerraform(this._domainName),
      entrypoint: cdktf.stringToTerraform(this._entrypoint),
      envlist: cdktf.stringToTerraform(this._envlist),
      file: cdktf.stringToTerraform(this._file),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      logging: cdktf.booleanToTerraform(this._logging),
      memory_high: cdktf.stringToTerraform(this._memoryHigh),
      mounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mounts),
      remote_image: cdktf.stringToTerraform(this._remoteImage),
      root_dir: cdktf.stringToTerraform(this._rootDir),
      running: cdktf.booleanToTerraform(this._running),
      start_on_boot: cdktf.booleanToTerraform(this._startOnBoot),
      stop_signal: cdktf.stringToTerraform(this._stopSignal),
      user: cdktf.stringToTerraform(this._user),
      workdir: cdktf.stringToTerraform(this._workdir),
      timeouts: containerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_restart_interval: {
        value: cdktf.stringToHclTerraform(this._autoRestartInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_certificate: {
        value: cdktf.booleanToHclTerraform(this._checkCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmd: {
        value: cdktf.stringToHclTerraform(this._cmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns: {
        value: cdktf.stringToHclTerraform(this._dns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entrypoint: {
        value: cdktf.stringToHclTerraform(this._entrypoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      envlist: {
        value: cdktf.stringToHclTerraform(this._envlist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.booleanToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      memory_high: {
        value: cdktf.stringToHclTerraform(this._memoryHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remote_image: {
        value: cdktf.stringToHclTerraform(this._remoteImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_dir: {
        value: cdktf.stringToHclTerraform(this._rootDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      running: {
        value: cdktf.booleanToHclTerraform(this._running),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_on_boot: {
        value: cdktf.booleanToHclTerraform(this._startOnBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stop_signal: {
        value: cdktf.stringToHclTerraform(this._stopSignal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workdir: {
        value: cdktf.stringToHclTerraform(this._workdir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: containerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
