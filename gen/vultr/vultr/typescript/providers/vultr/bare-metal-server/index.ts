// https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BareMetalServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#activation_email BareMetalServer#activation_email}
  */
  readonly activationEmail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#app_id BareMetalServer#app_id}
  */
  readonly appId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#app_variables BareMetalServer#app_variables}
  */
  readonly appVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#enable_ipv6 BareMetalServer#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#hostname BareMetalServer#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#id BareMetalServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#image_id BareMetalServer#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#label BareMetalServer#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#mdisk_mode BareMetalServer#mdisk_mode}
  */
  readonly mdiskMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#os_id BareMetalServer#os_id}
  */
  readonly osId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#persistent_pxe BareMetalServer#persistent_pxe}
  */
  readonly persistentPxe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#plan BareMetalServer#plan}
  */
  readonly plan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#region BareMetalServer#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#reserved_ipv4 BareMetalServer#reserved_ipv4}
  */
  readonly reservedIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#script_id BareMetalServer#script_id}
  */
  readonly scriptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#snapshot_id BareMetalServer#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#ssh_key_ids BareMetalServer#ssh_key_ids}
  */
  readonly sshKeyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#tags BareMetalServer#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#user_data BareMetalServer#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#user_scheme BareMetalServer#user_scheme}
  */
  readonly userScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#vpc2_ids BareMetalServer#vpc2_ids}
  */
  readonly vpc2Ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#vpc_id BareMetalServer#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#timeouts BareMetalServer#timeouts}
  */
  readonly timeouts?: BareMetalServerTimeouts;
}
export interface BareMetalServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#create BareMetalServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#update BareMetalServer#update}
  */
  readonly update?: string;
}

export function bareMetalServerTimeoutsToTerraform(struct?: BareMetalServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bareMetalServerTimeoutsToHclTerraform(struct?: BareMetalServerTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BareMetalServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BareMetalServerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BareMetalServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server vultr_bare_metal_server}
*/
export class BareMetalServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_bare_metal_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BareMetalServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BareMetalServer to import
  * @param importFromId The id of the existing BareMetalServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BareMetalServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_bare_metal_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/bare_metal_server vultr_bare_metal_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BareMetalServerConfig
  */
  public constructor(scope: Construct, id: string, config: BareMetalServerConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr_bare_metal_server',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.28.0',
        providerVersionConstraint: '2.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationEmail = config.activationEmail;
    this._appId = config.appId;
    this._appVariables = config.appVariables;
    this._enableIpv6 = config.enableIpv6;
    this._hostname = config.hostname;
    this._id = config.id;
    this._imageId = config.imageId;
    this._label = config.label;
    this._mdiskMode = config.mdiskMode;
    this._osId = config.osId;
    this._persistentPxe = config.persistentPxe;
    this._plan = config.plan;
    this._region = config.region;
    this._reservedIpv4 = config.reservedIpv4;
    this._scriptId = config.scriptId;
    this._snapshotId = config.snapshotId;
    this._sshKeyIds = config.sshKeyIds;
    this._tags = config.tags;
    this._userData = config.userData;
    this._userScheme = config.userScheme;
    this._vpc2Ids = config.vpc2Ids;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_email - computed: false, optional: true, required: false
  private _activationEmail?: boolean | cdktf.IResolvable; 
  public get activationEmail() {
    return this.getBooleanAttribute('activation_email');
  }
  public set activationEmail(value: boolean | cdktf.IResolvable) {
    this._activationEmail = value;
  }
  public resetActivationEmail() {
    this._activationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationEmailInput() {
    return this._activationEmail;
  }

  // app_id - computed: true, optional: true, required: false
  private _appId?: number; 
  public get appId() {
    return this.getNumberAttribute('app_id');
  }
  public set appId(value: number) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_variables - computed: false, optional: true, required: false
  private _appVariables?: { [key: string]: string }; 
  public get appVariables() {
    return this.getStringMapAttribute('app_variables');
  }
  public set appVariables(value: { [key: string]: string }) {
    this._appVariables = value;
  }
  public resetAppVariables() {
    this._appVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appVariablesInput() {
    return this._appVariables;
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // default_password - computed: true, optional: false, required: false
  public get defaultPassword() {
    return this.getStringAttribute('default_password');
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getStringAttribute('disk');
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
  }

  // gateway_v4 - computed: true, optional: false, required: false
  public get gatewayV4() {
    return this.getStringAttribute('gateway_v4');
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getNumberAttribute('mac_address');
  }

  // main_ip - computed: true, optional: false, required: false
  public get mainIp() {
    return this.getStringAttribute('main_ip');
  }

  // mdisk_mode - computed: false, optional: true, required: false
  private _mdiskMode?: string; 
  public get mdiskMode() {
    return this.getStringAttribute('mdisk_mode');
  }
  public set mdiskMode(value: string) {
    this._mdiskMode = value;
  }
  public resetMdiskMode() {
    this._mdiskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdiskModeInput() {
    return this._mdiskMode;
  }

  // netmask_v4 - computed: true, optional: false, required: false
  public get netmaskV4() {
    return this.getStringAttribute('netmask_v4');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // os_id - computed: true, optional: true, required: false
  private _osId?: number; 
  public get osId() {
    return this.getNumberAttribute('os_id');
  }
  public set osId(value: number) {
    this._osId = value;
  }
  public resetOsId() {
    this._osId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osIdInput() {
    return this._osId;
  }

  // persistent_pxe - computed: false, optional: true, required: false
  private _persistentPxe?: boolean | cdktf.IResolvable; 
  public get persistentPxe() {
    return this.getBooleanAttribute('persistent_pxe');
  }
  public set persistentPxe(value: boolean | cdktf.IResolvable) {
    this._persistentPxe = value;
  }
  public resetPersistentPxe() {
    this._persistentPxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentPxeInput() {
    return this._persistentPxe;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getStringAttribute('ram');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // reserved_ipv4 - computed: true, optional: true, required: false
  private _reservedIpv4?: string; 
  public get reservedIpv4() {
    return this.getStringAttribute('reserved_ipv4');
  }
  public set reservedIpv4(value: string) {
    this._reservedIpv4 = value;
  }
  public resetReservedIpv4() {
    this._reservedIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpv4Input() {
    return this._reservedIpv4;
  }

  // script_id - computed: false, optional: true, required: false
  private _scriptId?: string; 
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  public resetScriptId() {
    this._scriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // ssh_key_ids - computed: false, optional: true, required: false
  private _sshKeyIds?: string[]; 
  public get sshKeyIds() {
    return this.getListAttribute('ssh_key_ids');
  }
  public set sshKeyIds(value: string[]) {
    this._sshKeyIds = value;
  }
  public resetSshKeyIds() {
    this._sshKeyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyIdsInput() {
    return this._sshKeyIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_data - computed: true, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // user_scheme - computed: false, optional: true, required: false
  private _userScheme?: string; 
  public get userScheme() {
    return this.getStringAttribute('user_scheme');
  }
  public set userScheme(value: string) {
    this._userScheme = value;
  }
  public resetUserScheme() {
    this._userScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSchemeInput() {
    return this._userScheme;
  }

  // v6_main_ip - computed: true, optional: false, required: false
  public get v6MainIp() {
    return this.getStringAttribute('v6_main_ip');
  }

  // v6_network - computed: true, optional: false, required: false
  public get v6Network() {
    return this.getStringAttribute('v6_network');
  }

  // v6_network_size - computed: true, optional: false, required: false
  public get v6NetworkSize() {
    return this.getNumberAttribute('v6_network_size');
  }

  // vpc2_ids - computed: false, optional: true, required: false
  private _vpc2Ids?: string[]; 
  public get vpc2Ids() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc2_ids'));
  }
  public set vpc2Ids(value: string[]) {
    this._vpc2Ids = value;
  }
  public resetVpc2Ids() {
    this._vpc2Ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc2IdsInput() {
    return this._vpc2Ids;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BareMetalServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BareMetalServerTimeouts) {
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
      activation_email: cdktf.booleanToTerraform(this._activationEmail),
      app_id: cdktf.numberToTerraform(this._appId),
      app_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._appVariables),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      label: cdktf.stringToTerraform(this._label),
      mdisk_mode: cdktf.stringToTerraform(this._mdiskMode),
      os_id: cdktf.numberToTerraform(this._osId),
      persistent_pxe: cdktf.booleanToTerraform(this._persistentPxe),
      plan: cdktf.stringToTerraform(this._plan),
      region: cdktf.stringToTerraform(this._region),
      reserved_ipv4: cdktf.stringToTerraform(this._reservedIpv4),
      script_id: cdktf.stringToTerraform(this._scriptId),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      ssh_key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeyIds),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      user_scheme: cdktf.stringToTerraform(this._userScheme),
      vpc2_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpc2Ids),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: bareMetalServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_email: {
        value: cdktf.booleanToHclTerraform(this._activationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_id: {
        value: cdktf.numberToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      app_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._appVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdisk_mode: {
        value: cdktf.stringToHclTerraform(this._mdiskMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_id: {
        value: cdktf.numberToHclTerraform(this._osId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_pxe: {
        value: cdktf.booleanToHclTerraform(this._persistentPxe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_ipv4: {
        value: cdktf.stringToHclTerraform(this._reservedIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_id: {
        value: cdktf.stringToHclTerraform(this._scriptId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeyIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_scheme: {
        value: cdktf.stringToHclTerraform(this._userScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc2_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpc2Ids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: bareMetalServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BareMetalServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
