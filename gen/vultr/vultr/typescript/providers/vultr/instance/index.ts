// https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#activation_email Instance#activation_email}
  */
  readonly activationEmail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#app_id Instance#app_id}
  */
  readonly appId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#app_variables Instance#app_variables}
  */
  readonly appVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#backups Instance#backups}
  */
  readonly backups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#ddos_protection Instance#ddos_protection}
  */
  readonly ddosProtection?: boolean | cdktf.IResolvable;
  /**
  * Don't set up a public IPv4 address when IPv6 is enabled. 
  * Will not do anything unless enable_ipv6 is also true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#disable_public_ipv4 Instance#disable_public_ipv4}
  */
  readonly disablePublicIpv4?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#enable_ipv6 Instance#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#firewall_group_id Instance#firewall_group_id}
  */
  readonly firewallGroupId?: string;
  /**
  * The hostname of the instance. Updating the
  * hostname will cause a force new. This behavior is in place to prevent accidental reinstalls. Issuing an update to the
  * hostname on UI or API issues a reinstall of the OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#image_id Instance#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#ipxe_chain_url Instance#ipxe_chain_url}
  */
  readonly ipxeChainUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#iso_id Instance#iso_id}
  */
  readonly isoId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#label Instance#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#os_id Instance#os_id}
  */
  readonly osId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#plan Instance#plan}
  */
  readonly plan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#region Instance#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#reserved_ip_id Instance#reserved_ip_id}
  */
  readonly reservedIpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#script_id Instance#script_id}
  */
  readonly scriptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#snapshot_id Instance#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#ssh_key_ids Instance#ssh_key_ids}
  */
  readonly sshKeyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#tags Instance#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#user_data Instance#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#user_scheme Instance#user_scheme}
  */
  readonly userScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#vpc2_ids Instance#vpc2_ids}
  */
  readonly vpc2Ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#vpc_ids Instance#vpc_ids}
  */
  readonly vpcIds?: string[];
  /**
  * backups_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#backups_schedule Instance#backups_schedule}
  */
  readonly backupsSchedule?: InstanceBackupsSchedule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
}
export interface InstanceBackupsSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#dom Instance#dom}
  */
  readonly dom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#dow Instance#dow}
  */
  readonly dow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#hour Instance#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#type Instance#type}
  */
  readonly type: string;
}

export function instanceBackupsScheduleToTerraform(struct?: InstanceBackupsScheduleOutputReference | InstanceBackupsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dom: cdktf.numberToTerraform(struct!.dom),
    dow: cdktf.numberToTerraform(struct!.dow),
    hour: cdktf.numberToTerraform(struct!.hour),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function instanceBackupsScheduleToHclTerraform(struct?: InstanceBackupsScheduleOutputReference | InstanceBackupsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dom: {
      value: cdktf.numberToHclTerraform(struct!.dom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dow: {
      value: cdktf.numberToHclTerraform(struct!.dow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceBackupsScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceBackupsSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dom !== undefined) {
      hasAnyValues = true;
      internalValueResult.dom = this._dom;
    }
    if (this._dow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dow = this._dow;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceBackupsSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dom = undefined;
      this._dow = undefined;
      this._hour = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dom = value.dom;
      this._dow = value.dow;
      this._hour = value.hour;
      this._type = value.type;
    }
  }

  // dom - computed: true, optional: true, required: false
  private _dom?: number; 
  public get dom() {
    return this.getNumberAttribute('dom');
  }
  public set dom(value: number) {
    this._dom = value;
  }
  public resetDom() {
    this._dom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domInput() {
    return this._dom;
  }

  // dow - computed: true, optional: true, required: false
  private _dow?: number; 
  public get dow() {
    return this.getNumberAttribute('dow');
  }
  public set dow(value: number) {
    this._dow = value;
  }
  public resetDow() {
    this._dow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dowInput() {
    return this._dow;
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface InstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#create Instance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#update Instance#update}
  */
  readonly update?: string;
}

export function instanceTimeoutsToTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function instanceTimeoutsToHclTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
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

export class InstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance vultr_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/instance vultr_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr_instance',
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
    this._backups = config.backups;
    this._ddosProtection = config.ddosProtection;
    this._disablePublicIpv4 = config.disablePublicIpv4;
    this._enableIpv6 = config.enableIpv6;
    this._firewallGroupId = config.firewallGroupId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._imageId = config.imageId;
    this._ipxeChainUrl = config.ipxeChainUrl;
    this._isoId = config.isoId;
    this._label = config.label;
    this._osId = config.osId;
    this._plan = config.plan;
    this._region = config.region;
    this._reservedIpId = config.reservedIpId;
    this._scriptId = config.scriptId;
    this._snapshotId = config.snapshotId;
    this._sshKeyIds = config.sshKeyIds;
    this._tags = config.tags;
    this._userData = config.userData;
    this._userScheme = config.userScheme;
    this._vpc2Ids = config.vpc2Ids;
    this._vpcIds = config.vpcIds;
    this._backupsSchedule.internalValue = config.backupsSchedule;
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

  // allowed_bandwidth - computed: true, optional: false, required: false
  public get allowedBandwidth() {
    return this.getNumberAttribute('allowed_bandwidth');
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

  // backups - computed: false, optional: true, required: false
  private _backups?: string; 
  public get backups() {
    return this.getStringAttribute('backups');
  }
  public set backups(value: string) {
    this._backups = value;
  }
  public resetBackups() {
    this._backups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // ddos_protection - computed: false, optional: true, required: false
  private _ddosProtection?: boolean | cdktf.IResolvable; 
  public get ddosProtection() {
    return this.getBooleanAttribute('ddos_protection');
  }
  public set ddosProtection(value: boolean | cdktf.IResolvable) {
    this._ddosProtection = value;
  }
  public resetDdosProtection() {
    this._ddosProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionInput() {
    return this._ddosProtection;
  }

  // default_password - computed: true, optional: false, required: false
  public get defaultPassword() {
    return this.getStringAttribute('default_password');
  }

  // disable_public_ipv4 - computed: false, optional: true, required: false
  private _disablePublicIpv4?: boolean | cdktf.IResolvable; 
  public get disablePublicIpv4() {
    return this.getBooleanAttribute('disable_public_ipv4');
  }
  public set disablePublicIpv4(value: boolean | cdktf.IResolvable) {
    this._disablePublicIpv4 = value;
  }
  public resetDisablePublicIpv4() {
    this._disablePublicIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePublicIpv4Input() {
    return this._disablePublicIpv4;
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getNumberAttribute('disk');
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

  // features - computed: true, optional: false, required: false
  public get features() {
    return this.getListAttribute('features');
  }

  // firewall_group_id - computed: true, optional: true, required: false
  private _firewallGroupId?: string; 
  public get firewallGroupId() {
    return this.getStringAttribute('firewall_group_id');
  }
  public set firewallGroupId(value: string) {
    this._firewallGroupId = value;
  }
  public resetFirewallGroupId() {
    this._firewallGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallGroupIdInput() {
    return this._firewallGroupId;
  }

  // gateway_v4 - computed: true, optional: false, required: false
  public get gatewayV4() {
    return this.getStringAttribute('gateway_v4');
  }

  // hostname - computed: true, optional: true, required: false
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

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // ipxe_chain_url - computed: false, optional: true, required: false
  private _ipxeChainUrl?: string; 
  public get ipxeChainUrl() {
    return this.getStringAttribute('ipxe_chain_url');
  }
  public set ipxeChainUrl(value: string) {
    this._ipxeChainUrl = value;
  }
  public resetIpxeChainUrl() {
    this._ipxeChainUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeChainUrlInput() {
    return this._ipxeChainUrl;
  }

  // iso_id - computed: false, optional: true, required: false
  private _isoId?: string; 
  public get isoId() {
    return this.getStringAttribute('iso_id');
  }
  public set isoId(value: string) {
    this._isoId = value;
  }
  public resetIsoId() {
    this._isoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoIdInput() {
    return this._isoId;
  }

  // kvm - computed: true, optional: false, required: false
  public get kvm() {
    return this.getStringAttribute('kvm');
  }

  // label - computed: true, optional: true, required: false
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

  // main_ip - computed: true, optional: false, required: false
  public get mainIp() {
    return this.getStringAttribute('main_ip');
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

  // power_status - computed: true, optional: false, required: false
  public get powerStatus() {
    return this.getStringAttribute('power_status');
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
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

  // reserved_ip_id - computed: true, optional: true, required: false
  private _reservedIpId?: string; 
  public get reservedIpId() {
    return this.getStringAttribute('reserved_ip_id');
  }
  public set reservedIpId(value: string) {
    this._reservedIpId = value;
  }
  public resetReservedIpId() {
    this._reservedIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpIdInput() {
    return this._reservedIpId;
  }

  // script_id - computed: true, optional: true, required: false
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

  // server_status - computed: true, optional: false, required: false
  public get serverStatus() {
    return this.getStringAttribute('server_status');
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

  // vcpu_count - computed: true, optional: false, required: false
  public get vcpuCount() {
    return this.getNumberAttribute('vcpu_count');
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

  // vpc_ids - computed: true, optional: true, required: false
  private _vpcIds?: string[]; 
  public get vpcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_ids'));
  }
  public set vpcIds(value: string[]) {
    this._vpcIds = value;
  }
  public resetVpcIds() {
    this._vpcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdsInput() {
    return this._vpcIds;
  }

  // backups_schedule - computed: false, optional: true, required: false
  private _backupsSchedule = new InstanceBackupsScheduleOutputReference(this, "backups_schedule");
  public get backupsSchedule() {
    return this._backupsSchedule;
  }
  public putBackupsSchedule(value: InstanceBackupsSchedule) {
    this._backupsSchedule.internalValue = value;
  }
  public resetBackupsSchedule() {
    this._backupsSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsScheduleInput() {
    return this._backupsSchedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstanceTimeouts) {
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
      backups: cdktf.stringToTerraform(this._backups),
      ddos_protection: cdktf.booleanToTerraform(this._ddosProtection),
      disable_public_ipv4: cdktf.booleanToTerraform(this._disablePublicIpv4),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      firewall_group_id: cdktf.stringToTerraform(this._firewallGroupId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      ipxe_chain_url: cdktf.stringToTerraform(this._ipxeChainUrl),
      iso_id: cdktf.stringToTerraform(this._isoId),
      label: cdktf.stringToTerraform(this._label),
      os_id: cdktf.numberToTerraform(this._osId),
      plan: cdktf.stringToTerraform(this._plan),
      region: cdktf.stringToTerraform(this._region),
      reserved_ip_id: cdktf.stringToTerraform(this._reservedIpId),
      script_id: cdktf.stringToTerraform(this._scriptId),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      ssh_key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeyIds),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      user_scheme: cdktf.stringToTerraform(this._userScheme),
      vpc2_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpc2Ids),
      vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcIds),
      backups_schedule: instanceBackupsScheduleToTerraform(this._backupsSchedule.internalValue),
      timeouts: instanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      backups: {
        value: cdktf.stringToHclTerraform(this._backups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddos_protection: {
        value: cdktf.booleanToHclTerraform(this._ddosProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_public_ipv4: {
        value: cdktf.booleanToHclTerraform(this._disablePublicIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_group_id: {
        value: cdktf.stringToHclTerraform(this._firewallGroupId),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipxe_chain_url: {
        value: cdktf.stringToHclTerraform(this._ipxeChainUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iso_id: {
        value: cdktf.stringToHclTerraform(this._isoId),
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
      os_id: {
        value: cdktf.numberToHclTerraform(this._osId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      reserved_ip_id: {
        value: cdktf.stringToHclTerraform(this._reservedIpId),
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
      vpc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backups_schedule: {
        value: instanceBackupsScheduleToHclTerraform(this._backupsSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceBackupsScheduleList",
      },
      timeouts: {
        value: instanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
