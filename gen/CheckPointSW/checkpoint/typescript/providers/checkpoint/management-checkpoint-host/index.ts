// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCheckpointHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#color ManagementCheckpointHost#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#comments ManagementCheckpointHost#comments}
  */
  readonly comments?: string;
  /**
  * Hardware name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#hardware ManagementCheckpointHost#hardware}
  */
  readonly hardware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#id ManagementCheckpointHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#ignore_errors ManagementCheckpointHost#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#ignore_warnings ManagementCheckpointHost#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#ipv4_address ManagementCheckpointHost#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#ipv6_address ManagementCheckpointHost#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Logs settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#logs_settings ManagementCheckpointHost#logs_settings}
  */
  readonly logsSettings?: { [key: string]: string };
  /**
  * Management blades.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#management_blades ManagementCheckpointHost#management_blades}
  */
  readonly managementBlades?: { [key: string]: string };
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#name ManagementCheckpointHost#name}
  */
  readonly name: string;
  /**
  * NAT settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#nat_settings ManagementCheckpointHost#nat_settings}
  */
  readonly natSettings?: { [key: string]: string };
  /**
  * Secure internal connection one time password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#one_time_password ManagementCheckpointHost#one_time_password}
  */
  readonly oneTimePassword?: string;
  /**
  * Operating system name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#os ManagementCheckpointHost#os}
  */
  readonly os?: string;
  /**
  * Enable save logs locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#save_logs_locally ManagementCheckpointHost#save_logs_locally}
  */
  readonly saveLogsLocally?: boolean | cdktf.IResolvable;
  /**
  * Collection of Server(s) to send alerts to identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#send_alerts_to_server ManagementCheckpointHost#send_alerts_to_server}
  */
  readonly sendAlertsToServer?: string[];
  /**
  * Collection of Backup server(s) to send logs to identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#send_logs_to_backup_server ManagementCheckpointHost#send_logs_to_backup_server}
  */
  readonly sendLogsToBackupServer?: string[];
  /**
  * Collection of Server(s) to send logs to identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#send_logs_to_server ManagementCheckpointHost#send_logs_to_server}
  */
  readonly sendLogsToServer?: string[];
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#tags ManagementCheckpointHost#tags}
  */
  readonly tags?: string[];
  /**
  * Checkpoint host platform version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#version ManagementCheckpointHost#version}
  */
  readonly version?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#interfaces ManagementCheckpointHost#interfaces}
  */
  readonly interfaces?: ManagementCheckpointHostInterfaces[] | cdktf.IResolvable;
}
export interface ManagementCheckpointHostInterfaces {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#color ManagementCheckpointHost#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#comments ManagementCheckpointHost#comments}
  */
  readonly comments?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#ignore_errors ManagementCheckpointHost#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#ignore_warnings ManagementCheckpointHost#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * IPv4 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#mask_length4 ManagementCheckpointHost#mask_length4}
  */
  readonly maskLength4?: number;
  /**
  * IPv6 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#mask_length6 ManagementCheckpointHost#mask_length6}
  */
  readonly maskLength6?: number;
  /**
  * Interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#name ManagementCheckpointHost#name}
  */
  readonly name?: string;
  /**
  * IPv4 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#subnet4 ManagementCheckpointHost#subnet4}
  */
  readonly subnet4?: string;
  /**
  * IPv6 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#subnet6 ManagementCheckpointHost#subnet6}
  */
  readonly subnet6?: string;
  /**
  * IPv4 network mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#subnet_mask ManagementCheckpointHost#subnet_mask}
  */
  readonly subnetMask?: string;
}

export function managementCheckpointHostInterfacesToTerraform(struct?: ManagementCheckpointHostInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    comments: cdktf.stringToTerraform(struct!.comments),
    ignore_errors: cdktf.booleanToTerraform(struct!.ignoreErrors),
    ignore_warnings: cdktf.booleanToTerraform(struct!.ignoreWarnings),
    mask_length4: cdktf.numberToTerraform(struct!.maskLength4),
    mask_length6: cdktf.numberToTerraform(struct!.maskLength6),
    name: cdktf.stringToTerraform(struct!.name),
    subnet4: cdktf.stringToTerraform(struct!.subnet4),
    subnet6: cdktf.stringToTerraform(struct!.subnet6),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
  }
}


export function managementCheckpointHostInterfacesToHclTerraform(struct?: ManagementCheckpointHostInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_errors: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mask_length4: {
      value: cdktf.numberToHclTerraform(struct!.maskLength4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_length6: {
      value: cdktf.numberToHclTerraform(struct!.maskLength6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet4: {
      value: cdktf.stringToHclTerraform(struct!.subnet4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet6: {
      value: cdktf.stringToHclTerraform(struct!.subnet6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementCheckpointHostInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementCheckpointHostInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._ignoreErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrors = this._ignoreErrors;
    }
    if (this._ignoreWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreWarnings = this._ignoreWarnings;
    }
    if (this._maskLength4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskLength4 = this._maskLength4;
    }
    if (this._maskLength6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskLength6 = this._maskLength6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnet4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet4 = this._subnet4;
    }
    if (this._subnet6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet6 = this._subnet6;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementCheckpointHostInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._comments = undefined;
      this._ignoreErrors = undefined;
      this._ignoreWarnings = undefined;
      this._maskLength4 = undefined;
      this._maskLength6 = undefined;
      this._name = undefined;
      this._subnet4 = undefined;
      this._subnet6 = undefined;
      this._subnetMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._comments = value.comments;
      this._ignoreErrors = value.ignoreErrors;
      this._ignoreWarnings = value.ignoreWarnings;
      this._maskLength4 = value.maskLength4;
      this._maskLength6 = value.maskLength6;
      this._name = value.name;
      this._subnet4 = value.subnet4;
      this._subnet6 = value.subnet6;
      this._subnetMask = value.subnetMask;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // mask_length4 - computed: false, optional: true, required: false
  private _maskLength4?: number; 
  public get maskLength4() {
    return this.getNumberAttribute('mask_length4');
  }
  public set maskLength4(value: number) {
    this._maskLength4 = value;
  }
  public resetMaskLength4() {
    this._maskLength4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLength4Input() {
    return this._maskLength4;
  }

  // mask_length6 - computed: false, optional: true, required: false
  private _maskLength6?: number; 
  public get maskLength6() {
    return this.getNumberAttribute('mask_length6');
  }
  public set maskLength6(value: number) {
    this._maskLength6 = value;
  }
  public resetMaskLength6() {
    this._maskLength6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLength6Input() {
    return this._maskLength6;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // subnet4 - computed: false, optional: true, required: false
  private _subnet4?: string; 
  public get subnet4() {
    return this.getStringAttribute('subnet4');
  }
  public set subnet4(value: string) {
    this._subnet4 = value;
  }
  public resetSubnet4() {
    this._subnet4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet4Input() {
    return this._subnet4;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6?: string; 
  public get subnet6() {
    return this.getStringAttribute('subnet6');
  }
  public set subnet6(value: string) {
    this._subnet6 = value;
  }
  public resetSubnet6() {
    this._subnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }
}

export class ManagementCheckpointHostInterfacesList extends cdktf.ComplexList {
  public internalValue? : ManagementCheckpointHostInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ManagementCheckpointHostInterfacesOutputReference {
    return new ManagementCheckpointHostInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host checkpoint_management_checkpoint_host}
*/
export class ManagementCheckpointHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_checkpoint_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCheckpointHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCheckpointHost to import
  * @param importFromId The id of the existing ManagementCheckpointHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCheckpointHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_checkpoint_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_checkpoint_host checkpoint_management_checkpoint_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCheckpointHostConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementCheckpointHostConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_checkpoint_host',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._hardware = config.hardware;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._logsSettings = config.logsSettings;
    this._managementBlades = config.managementBlades;
    this._name = config.name;
    this._natSettings = config.natSettings;
    this._oneTimePassword = config.oneTimePassword;
    this._os = config.os;
    this._saveLogsLocally = config.saveLogsLocally;
    this._sendAlertsToServer = config.sendAlertsToServer;
    this._sendLogsToBackupServer = config.sendLogsToBackupServer;
    this._sendLogsToServer = config.sendLogsToServer;
    this._tags = config.tags;
    this._version = config.version;
    this._interfaces.internalValue = config.interfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // hardware - computed: false, optional: true, required: false
  private _hardware?: string; 
  public get hardware() {
    return this.getStringAttribute('hardware');
  }
  public set hardware(value: string) {
    this._hardware = value;
  }
  public resetHardware() {
    this._hardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // logs_settings - computed: false, optional: true, required: false
  private _logsSettings?: { [key: string]: string }; 
  public get logsSettings() {
    return this.getStringMapAttribute('logs_settings');
  }
  public set logsSettings(value: { [key: string]: string }) {
    this._logsSettings = value;
  }
  public resetLogsSettings() {
    this._logsSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsSettingsInput() {
    return this._logsSettings;
  }

  // management_blades - computed: false, optional: true, required: false
  private _managementBlades?: { [key: string]: string }; 
  public get managementBlades() {
    return this.getStringMapAttribute('management_blades');
  }
  public set managementBlades(value: { [key: string]: string }) {
    this._managementBlades = value;
  }
  public resetManagementBlades() {
    this._managementBlades = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementBladesInput() {
    return this._managementBlades;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nat_settings - computed: false, optional: true, required: false
  private _natSettings?: { [key: string]: string }; 
  public get natSettings() {
    return this.getStringMapAttribute('nat_settings');
  }
  public set natSettings(value: { [key: string]: string }) {
    this._natSettings = value;
  }
  public resetNatSettings() {
    this._natSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSettingsInput() {
    return this._natSettings;
  }

  // one_time_password - computed: false, optional: true, required: false
  private _oneTimePassword?: string; 
  public get oneTimePassword() {
    return this.getStringAttribute('one_time_password');
  }
  public set oneTimePassword(value: string) {
    this._oneTimePassword = value;
  }
  public resetOneTimePassword() {
    this._oneTimePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimePasswordInput() {
    return this._oneTimePassword;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // save_logs_locally - computed: false, optional: true, required: false
  private _saveLogsLocally?: boolean | cdktf.IResolvable; 
  public get saveLogsLocally() {
    return this.getBooleanAttribute('save_logs_locally');
  }
  public set saveLogsLocally(value: boolean | cdktf.IResolvable) {
    this._saveLogsLocally = value;
  }
  public resetSaveLogsLocally() {
    this._saveLogsLocally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveLogsLocallyInput() {
    return this._saveLogsLocally;
  }

  // send_alerts_to_server - computed: false, optional: true, required: false
  private _sendAlertsToServer?: string[]; 
  public get sendAlertsToServer() {
    return cdktf.Fn.tolist(this.getListAttribute('send_alerts_to_server'));
  }
  public set sendAlertsToServer(value: string[]) {
    this._sendAlertsToServer = value;
  }
  public resetSendAlertsToServer() {
    this._sendAlertsToServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAlertsToServerInput() {
    return this._sendAlertsToServer;
  }

  // send_logs_to_backup_server - computed: false, optional: true, required: false
  private _sendLogsToBackupServer?: string[]; 
  public get sendLogsToBackupServer() {
    return cdktf.Fn.tolist(this.getListAttribute('send_logs_to_backup_server'));
  }
  public set sendLogsToBackupServer(value: string[]) {
    this._sendLogsToBackupServer = value;
  }
  public resetSendLogsToBackupServer() {
    this._sendLogsToBackupServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLogsToBackupServerInput() {
    return this._sendLogsToBackupServer;
  }

  // send_logs_to_server - computed: false, optional: true, required: false
  private _sendLogsToServer?: string[]; 
  public get sendLogsToServer() {
    return cdktf.Fn.tolist(this.getListAttribute('send_logs_to_server'));
  }
  public set sendLogsToServer(value: string[]) {
    this._sendLogsToServer = value;
  }
  public resetSendLogsToServer() {
    this._sendLogsToServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLogsToServerInput() {
    return this._sendLogsToServer;
  }

  // sic_name - computed: true, optional: false, required: false
  public get sicName() {
    return this.getStringAttribute('sic_name');
  }

  // sic_state - computed: true, optional: false, required: false
  public get sicState() {
    return this.getStringAttribute('sic_state');
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ManagementCheckpointHostInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ManagementCheckpointHostInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      hardware: cdktf.stringToTerraform(this._hardware),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      logs_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._logsSettings),
      management_blades: cdktf.hashMapper(cdktf.stringToTerraform)(this._managementBlades),
      name: cdktf.stringToTerraform(this._name),
      nat_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._natSettings),
      one_time_password: cdktf.stringToTerraform(this._oneTimePassword),
      os: cdktf.stringToTerraform(this._os),
      save_logs_locally: cdktf.booleanToTerraform(this._saveLogsLocally),
      send_alerts_to_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendAlertsToServer),
      send_logs_to_backup_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendLogsToBackupServer),
      send_logs_to_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendLogsToServer),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      interfaces: cdktf.listMapper(managementCheckpointHostInterfacesToTerraform, true)(this._interfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware: {
        value: cdktf.stringToHclTerraform(this._hardware),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._logsSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      management_blades: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._managementBlades),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._natSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      one_time_password: {
        value: cdktf.stringToHclTerraform(this._oneTimePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_logs_locally: {
        value: cdktf.booleanToHclTerraform(this._saveLogsLocally),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_alerts_to_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendAlertsToServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_logs_to_backup_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendLogsToBackupServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_logs_to_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendLogsToServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(managementCheckpointHostInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementCheckpointHostInterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
