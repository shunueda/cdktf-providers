// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensioncontrollerExtenderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#allowaccess ExtensioncontrollerExtender#allowaccess}
  */
  readonly allowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#authorized ExtensioncontrollerExtender#authorized}
  */
  readonly authorized?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#bandwidth_limit ExtensioncontrollerExtender#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#description ExtensioncontrollerExtender#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#device_id ExtensioncontrollerExtender#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#enforce_bandwidth ExtensioncontrollerExtender#enforce_bandwidth}
  */
  readonly enforceBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#ext_name ExtensioncontrollerExtender#ext_name}
  */
  readonly extName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#extension_type ExtensioncontrollerExtender#extension_type}
  */
  readonly extensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#firmware_provision_latest ExtensioncontrollerExtender#firmware_provision_latest}
  */
  readonly firmwareProvisionLatest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#fosid ExtensioncontrollerExtender#fosid}
  */
  readonly fosid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#get_all_tables ExtensioncontrollerExtender#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#id ExtensioncontrollerExtender#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#login_password ExtensioncontrollerExtender#login_password}
  */
  readonly loginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#login_password_change ExtensioncontrollerExtender#login_password_change}
  */
  readonly loginPasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#name ExtensioncontrollerExtender#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#override_allowaccess ExtensioncontrollerExtender#override_allowaccess}
  */
  readonly overrideAllowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#override_enforce_bandwidth ExtensioncontrollerExtender#override_enforce_bandwidth}
  */
  readonly overrideEnforceBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#override_login_password_change ExtensioncontrollerExtender#override_login_password_change}
  */
  readonly overrideLoginPasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#profile ExtensioncontrollerExtender#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#vdom ExtensioncontrollerExtender#vdom}
  */
  readonly vdom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#vdomparam ExtensioncontrollerExtender#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * wan_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#wan_extension ExtensioncontrollerExtender#wan_extension}
  */
  readonly wanExtension?: ExtensioncontrollerExtenderWanExtension;
}
export interface ExtensioncontrollerExtenderWanExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#modem1_extension ExtensioncontrollerExtender#modem1_extension}
  */
  readonly modem1Extension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#modem1_pdn1_interface ExtensioncontrollerExtender#modem1_pdn1_interface}
  */
  readonly modem1Pdn1Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#modem1_pdn2_interface ExtensioncontrollerExtender#modem1_pdn2_interface}
  */
  readonly modem1Pdn2Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#modem1_pdn3_interface ExtensioncontrollerExtender#modem1_pdn3_interface}
  */
  readonly modem1Pdn3Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#modem1_pdn4_interface ExtensioncontrollerExtender#modem1_pdn4_interface}
  */
  readonly modem1Pdn4Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#modem2_extension ExtensioncontrollerExtender#modem2_extension}
  */
  readonly modem2Extension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#modem2_pdn1_interface ExtensioncontrollerExtender#modem2_pdn1_interface}
  */
  readonly modem2Pdn1Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#modem2_pdn2_interface ExtensioncontrollerExtender#modem2_pdn2_interface}
  */
  readonly modem2Pdn2Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#modem2_pdn3_interface ExtensioncontrollerExtender#modem2_pdn3_interface}
  */
  readonly modem2Pdn3Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#modem2_pdn4_interface ExtensioncontrollerExtender#modem2_pdn4_interface}
  */
  readonly modem2Pdn4Interface?: string;
}

export function extensioncontrollerExtenderWanExtensionToTerraform(struct?: ExtensioncontrollerExtenderWanExtensionOutputReference | ExtensioncontrollerExtenderWanExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    modem1_extension: cdktf.stringToTerraform(struct!.modem1Extension),
    modem1_pdn1_interface: cdktf.stringToTerraform(struct!.modem1Pdn1Interface),
    modem1_pdn2_interface: cdktf.stringToTerraform(struct!.modem1Pdn2Interface),
    modem1_pdn3_interface: cdktf.stringToTerraform(struct!.modem1Pdn3Interface),
    modem1_pdn4_interface: cdktf.stringToTerraform(struct!.modem1Pdn4Interface),
    modem2_extension: cdktf.stringToTerraform(struct!.modem2Extension),
    modem2_pdn1_interface: cdktf.stringToTerraform(struct!.modem2Pdn1Interface),
    modem2_pdn2_interface: cdktf.stringToTerraform(struct!.modem2Pdn2Interface),
    modem2_pdn3_interface: cdktf.stringToTerraform(struct!.modem2Pdn3Interface),
    modem2_pdn4_interface: cdktf.stringToTerraform(struct!.modem2Pdn4Interface),
  }
}


export function extensioncontrollerExtenderWanExtensionToHclTerraform(struct?: ExtensioncontrollerExtenderWanExtensionOutputReference | ExtensioncontrollerExtenderWanExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    modem1_extension: {
      value: cdktf.stringToHclTerraform(struct!.modem1Extension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modem1_pdn1_interface: {
      value: cdktf.stringToHclTerraform(struct!.modem1Pdn1Interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modem1_pdn2_interface: {
      value: cdktf.stringToHclTerraform(struct!.modem1Pdn2Interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modem1_pdn3_interface: {
      value: cdktf.stringToHclTerraform(struct!.modem1Pdn3Interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modem1_pdn4_interface: {
      value: cdktf.stringToHclTerraform(struct!.modem1Pdn4Interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modem2_extension: {
      value: cdktf.stringToHclTerraform(struct!.modem2Extension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modem2_pdn1_interface: {
      value: cdktf.stringToHclTerraform(struct!.modem2Pdn1Interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modem2_pdn2_interface: {
      value: cdktf.stringToHclTerraform(struct!.modem2Pdn2Interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modem2_pdn3_interface: {
      value: cdktf.stringToHclTerraform(struct!.modem2Pdn3Interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modem2_pdn4_interface: {
      value: cdktf.stringToHclTerraform(struct!.modem2Pdn4Interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderWanExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderWanExtension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modem1Extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem1Extension = this._modem1Extension;
    }
    if (this._modem1Pdn1Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem1Pdn1Interface = this._modem1Pdn1Interface;
    }
    if (this._modem1Pdn2Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem1Pdn2Interface = this._modem1Pdn2Interface;
    }
    if (this._modem1Pdn3Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem1Pdn3Interface = this._modem1Pdn3Interface;
    }
    if (this._modem1Pdn4Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem1Pdn4Interface = this._modem1Pdn4Interface;
    }
    if (this._modem2Extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem2Extension = this._modem2Extension;
    }
    if (this._modem2Pdn1Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem2Pdn1Interface = this._modem2Pdn1Interface;
    }
    if (this._modem2Pdn2Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem2Pdn2Interface = this._modem2Pdn2Interface;
    }
    if (this._modem2Pdn3Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem2Pdn3Interface = this._modem2Pdn3Interface;
    }
    if (this._modem2Pdn4Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem2Pdn4Interface = this._modem2Pdn4Interface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtensioncontrollerExtenderWanExtension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modem1Extension = undefined;
      this._modem1Pdn1Interface = undefined;
      this._modem1Pdn2Interface = undefined;
      this._modem1Pdn3Interface = undefined;
      this._modem1Pdn4Interface = undefined;
      this._modem2Extension = undefined;
      this._modem2Pdn1Interface = undefined;
      this._modem2Pdn2Interface = undefined;
      this._modem2Pdn3Interface = undefined;
      this._modem2Pdn4Interface = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modem1Extension = value.modem1Extension;
      this._modem1Pdn1Interface = value.modem1Pdn1Interface;
      this._modem1Pdn2Interface = value.modem1Pdn2Interface;
      this._modem1Pdn3Interface = value.modem1Pdn3Interface;
      this._modem1Pdn4Interface = value.modem1Pdn4Interface;
      this._modem2Extension = value.modem2Extension;
      this._modem2Pdn1Interface = value.modem2Pdn1Interface;
      this._modem2Pdn2Interface = value.modem2Pdn2Interface;
      this._modem2Pdn3Interface = value.modem2Pdn3Interface;
      this._modem2Pdn4Interface = value.modem2Pdn4Interface;
    }
  }

  // modem1_extension - computed: false, optional: true, required: false
  private _modem1Extension?: string; 
  public get modem1Extension() {
    return this.getStringAttribute('modem1_extension');
  }
  public set modem1Extension(value: string) {
    this._modem1Extension = value;
  }
  public resetModem1Extension() {
    this._modem1Extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem1ExtensionInput() {
    return this._modem1Extension;
  }

  // modem1_pdn1_interface - computed: false, optional: true, required: false
  private _modem1Pdn1Interface?: string; 
  public get modem1Pdn1Interface() {
    return this.getStringAttribute('modem1_pdn1_interface');
  }
  public set modem1Pdn1Interface(value: string) {
    this._modem1Pdn1Interface = value;
  }
  public resetModem1Pdn1Interface() {
    this._modem1Pdn1Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem1Pdn1InterfaceInput() {
    return this._modem1Pdn1Interface;
  }

  // modem1_pdn2_interface - computed: false, optional: true, required: false
  private _modem1Pdn2Interface?: string; 
  public get modem1Pdn2Interface() {
    return this.getStringAttribute('modem1_pdn2_interface');
  }
  public set modem1Pdn2Interface(value: string) {
    this._modem1Pdn2Interface = value;
  }
  public resetModem1Pdn2Interface() {
    this._modem1Pdn2Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem1Pdn2InterfaceInput() {
    return this._modem1Pdn2Interface;
  }

  // modem1_pdn3_interface - computed: false, optional: true, required: false
  private _modem1Pdn3Interface?: string; 
  public get modem1Pdn3Interface() {
    return this.getStringAttribute('modem1_pdn3_interface');
  }
  public set modem1Pdn3Interface(value: string) {
    this._modem1Pdn3Interface = value;
  }
  public resetModem1Pdn3Interface() {
    this._modem1Pdn3Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem1Pdn3InterfaceInput() {
    return this._modem1Pdn3Interface;
  }

  // modem1_pdn4_interface - computed: false, optional: true, required: false
  private _modem1Pdn4Interface?: string; 
  public get modem1Pdn4Interface() {
    return this.getStringAttribute('modem1_pdn4_interface');
  }
  public set modem1Pdn4Interface(value: string) {
    this._modem1Pdn4Interface = value;
  }
  public resetModem1Pdn4Interface() {
    this._modem1Pdn4Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem1Pdn4InterfaceInput() {
    return this._modem1Pdn4Interface;
  }

  // modem2_extension - computed: false, optional: true, required: false
  private _modem2Extension?: string; 
  public get modem2Extension() {
    return this.getStringAttribute('modem2_extension');
  }
  public set modem2Extension(value: string) {
    this._modem2Extension = value;
  }
  public resetModem2Extension() {
    this._modem2Extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2ExtensionInput() {
    return this._modem2Extension;
  }

  // modem2_pdn1_interface - computed: false, optional: true, required: false
  private _modem2Pdn1Interface?: string; 
  public get modem2Pdn1Interface() {
    return this.getStringAttribute('modem2_pdn1_interface');
  }
  public set modem2Pdn1Interface(value: string) {
    this._modem2Pdn1Interface = value;
  }
  public resetModem2Pdn1Interface() {
    this._modem2Pdn1Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2Pdn1InterfaceInput() {
    return this._modem2Pdn1Interface;
  }

  // modem2_pdn2_interface - computed: false, optional: true, required: false
  private _modem2Pdn2Interface?: string; 
  public get modem2Pdn2Interface() {
    return this.getStringAttribute('modem2_pdn2_interface');
  }
  public set modem2Pdn2Interface(value: string) {
    this._modem2Pdn2Interface = value;
  }
  public resetModem2Pdn2Interface() {
    this._modem2Pdn2Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2Pdn2InterfaceInput() {
    return this._modem2Pdn2Interface;
  }

  // modem2_pdn3_interface - computed: false, optional: true, required: false
  private _modem2Pdn3Interface?: string; 
  public get modem2Pdn3Interface() {
    return this.getStringAttribute('modem2_pdn3_interface');
  }
  public set modem2Pdn3Interface(value: string) {
    this._modem2Pdn3Interface = value;
  }
  public resetModem2Pdn3Interface() {
    this._modem2Pdn3Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2Pdn3InterfaceInput() {
    return this._modem2Pdn3Interface;
  }

  // modem2_pdn4_interface - computed: false, optional: true, required: false
  private _modem2Pdn4Interface?: string; 
  public get modem2Pdn4Interface() {
    return this.getStringAttribute('modem2_pdn4_interface');
  }
  public set modem2Pdn4Interface(value: string) {
    this._modem2Pdn4Interface = value;
  }
  public resetModem2Pdn4Interface() {
    this._modem2Pdn4Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2Pdn4InterfaceInput() {
    return this._modem2Pdn4Interface;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender fortios_extensioncontroller_extender}
*/
export class ExtensioncontrollerExtender extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_extensioncontroller_extender";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtensioncontrollerExtender resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtensioncontrollerExtender to import
  * @param importFromId The id of the existing ExtensioncontrollerExtender that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtensioncontrollerExtender to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_extensioncontroller_extender", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extender fortios_extensioncontroller_extender} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensioncontrollerExtenderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExtensioncontrollerExtenderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_extensioncontroller_extender',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowaccess = config.allowaccess;
    this._authorized = config.authorized;
    this._bandwidthLimit = config.bandwidthLimit;
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._enforceBandwidth = config.enforceBandwidth;
    this._extName = config.extName;
    this._extensionType = config.extensionType;
    this._firmwareProvisionLatest = config.firmwareProvisionLatest;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._loginPassword = config.loginPassword;
    this._loginPasswordChange = config.loginPasswordChange;
    this._name = config.name;
    this._overrideAllowaccess = config.overrideAllowaccess;
    this._overrideEnforceBandwidth = config.overrideEnforceBandwidth;
    this._overrideLoginPasswordChange = config.overrideLoginPasswordChange;
    this._profile = config.profile;
    this._vdom = config.vdom;
    this._vdomparam = config.vdomparam;
    this._wanExtension.internalValue = config.wanExtension;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowaccess - computed: false, optional: true, required: false
  private _allowaccess?: string; 
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }
  public set allowaccess(value: string) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // authorized - computed: true, optional: true, required: false
  private _authorized?: string; 
  public get authorized() {
    return this.getStringAttribute('authorized');
  }
  public set authorized(value: string) {
    this._authorized = value;
  }
  public resetAuthorized() {
    this._authorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedInput() {
    return this._authorized;
  }

  // bandwidth_limit - computed: true, optional: true, required: false
  private _bandwidthLimit?: number; 
  public get bandwidthLimit() {
    return this.getNumberAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: number) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // enforce_bandwidth - computed: true, optional: true, required: false
  private _enforceBandwidth?: string; 
  public get enforceBandwidth() {
    return this.getStringAttribute('enforce_bandwidth');
  }
  public set enforceBandwidth(value: string) {
    this._enforceBandwidth = value;
  }
  public resetEnforceBandwidth() {
    this._enforceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceBandwidthInput() {
    return this._enforceBandwidth;
  }

  // ext_name - computed: false, optional: true, required: false
  private _extName?: string; 
  public get extName() {
    return this.getStringAttribute('ext_name');
  }
  public set extName(value: string) {
    this._extName = value;
  }
  public resetExtName() {
    this._extName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extNameInput() {
    return this._extName;
  }

  // extension_type - computed: false, optional: true, required: false
  private _extensionType?: string; 
  public get extensionType() {
    return this.getStringAttribute('extension_type');
  }
  public set extensionType(value: string) {
    this._extensionType = value;
  }
  public resetExtensionType() {
    this._extensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionTypeInput() {
    return this._extensionType;
  }

  // firmware_provision_latest - computed: true, optional: true, required: false
  private _firmwareProvisionLatest?: string; 
  public get firmwareProvisionLatest() {
    return this.getStringAttribute('firmware_provision_latest');
  }
  public set firmwareProvisionLatest(value: string) {
    this._firmwareProvisionLatest = value;
  }
  public resetFirmwareProvisionLatest() {
    this._firmwareProvisionLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionLatestInput() {
    return this._firmwareProvisionLatest;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: string; 
  public get fosid() {
    return this.getStringAttribute('fosid');
  }
  public set fosid(value: string) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // login_password - computed: false, optional: true, required: false
  private _loginPassword?: string; 
  public get loginPassword() {
    return this.getStringAttribute('login_password');
  }
  public set loginPassword(value: string) {
    this._loginPassword = value;
  }
  public resetLoginPassword() {
    this._loginPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswordInput() {
    return this._loginPassword;
  }

  // login_password_change - computed: true, optional: true, required: false
  private _loginPasswordChange?: string; 
  public get loginPasswordChange() {
    return this.getStringAttribute('login_password_change');
  }
  public set loginPasswordChange(value: string) {
    this._loginPasswordChange = value;
  }
  public resetLoginPasswordChange() {
    this._loginPasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswordChangeInput() {
    return this._loginPasswordChange;
  }

  // name - computed: true, optional: true, required: false
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

  // override_allowaccess - computed: true, optional: true, required: false
  private _overrideAllowaccess?: string; 
  public get overrideAllowaccess() {
    return this.getStringAttribute('override_allowaccess');
  }
  public set overrideAllowaccess(value: string) {
    this._overrideAllowaccess = value;
  }
  public resetOverrideAllowaccess() {
    this._overrideAllowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAllowaccessInput() {
    return this._overrideAllowaccess;
  }

  // override_enforce_bandwidth - computed: true, optional: true, required: false
  private _overrideEnforceBandwidth?: string; 
  public get overrideEnforceBandwidth() {
    return this.getStringAttribute('override_enforce_bandwidth');
  }
  public set overrideEnforceBandwidth(value: string) {
    this._overrideEnforceBandwidth = value;
  }
  public resetOverrideEnforceBandwidth() {
    this._overrideEnforceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideEnforceBandwidthInput() {
    return this._overrideEnforceBandwidth;
  }

  // override_login_password_change - computed: true, optional: true, required: false
  private _overrideLoginPasswordChange?: string; 
  public get overrideLoginPasswordChange() {
    return this.getStringAttribute('override_login_password_change');
  }
  public set overrideLoginPasswordChange(value: string) {
    this._overrideLoginPasswordChange = value;
  }
  public resetOverrideLoginPasswordChange() {
    this._overrideLoginPasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLoginPasswordChangeInput() {
    return this._overrideLoginPasswordChange;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: number; 
  public get vdom() {
    return this.getNumberAttribute('vdom');
  }
  public set vdom(value: number) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // wan_extension - computed: false, optional: true, required: false
  private _wanExtension = new ExtensioncontrollerExtenderWanExtensionOutputReference(this, "wan_extension");
  public get wanExtension() {
    return this._wanExtension;
  }
  public putWanExtension(value: ExtensioncontrollerExtenderWanExtension) {
    this._wanExtension.internalValue = value;
  }
  public resetWanExtension() {
    this._wanExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanExtensionInput() {
    return this._wanExtension.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowaccess: cdktf.stringToTerraform(this._allowaccess),
      authorized: cdktf.stringToTerraform(this._authorized),
      bandwidth_limit: cdktf.numberToTerraform(this._bandwidthLimit),
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.numberToTerraform(this._deviceId),
      enforce_bandwidth: cdktf.stringToTerraform(this._enforceBandwidth),
      ext_name: cdktf.stringToTerraform(this._extName),
      extension_type: cdktf.stringToTerraform(this._extensionType),
      firmware_provision_latest: cdktf.stringToTerraform(this._firmwareProvisionLatest),
      fosid: cdktf.stringToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      login_password: cdktf.stringToTerraform(this._loginPassword),
      login_password_change: cdktf.stringToTerraform(this._loginPasswordChange),
      name: cdktf.stringToTerraform(this._name),
      override_allowaccess: cdktf.stringToTerraform(this._overrideAllowaccess),
      override_enforce_bandwidth: cdktf.stringToTerraform(this._overrideEnforceBandwidth),
      override_login_password_change: cdktf.stringToTerraform(this._overrideLoginPasswordChange),
      profile: cdktf.stringToTerraform(this._profile),
      vdom: cdktf.numberToTerraform(this._vdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      wan_extension: extensioncontrollerExtenderWanExtensionToTerraform(this._wanExtension.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowaccess: {
        value: cdktf.stringToHclTerraform(this._allowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized: {
        value: cdktf.stringToHclTerraform(this._authorized),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_limit: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enforce_bandwidth: {
        value: cdktf.stringToHclTerraform(this._enforceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_name: {
        value: cdktf.stringToHclTerraform(this._extName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_type: {
        value: cdktf.stringToHclTerraform(this._extensionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_provision_latest: {
        value: cdktf.stringToHclTerraform(this._firmwareProvisionLatest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.stringToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      login_password: {
        value: cdktf.stringToHclTerraform(this._loginPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_password_change: {
        value: cdktf.stringToHclTerraform(this._loginPasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_allowaccess: {
        value: cdktf.stringToHclTerraform(this._overrideAllowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_enforce_bandwidth: {
        value: cdktf.stringToHclTerraform(this._overrideEnforceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_login_password_change: {
        value: cdktf.stringToHclTerraform(this._overrideLoginPasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.numberToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_extension: {
        value: extensioncontrollerExtenderWanExtensionToHclTerraform(this._wanExtension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtensioncontrollerExtenderWanExtensionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
