// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensioncontrollerFortigateprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#device_name ExtensioncontrollerFortigateprofile#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#device_vdom ExtensioncontrollerFortigateprofile#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#extension ExtensioncontrollerFortigateprofile#extension}
  */
  readonly extension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#fosid ExtensioncontrollerFortigateprofile#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#id ExtensioncontrollerFortigateprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#name ExtensioncontrollerFortigateprofile#name}
  */
  readonly name?: string;
  /**
  * lan_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#lan_extension ExtensioncontrollerFortigateprofile#lan_extension}
  */
  readonly lanExtension?: ExtensioncontrollerFortigateprofileLanExtension;
}
export interface ExtensioncontrollerFortigateprofileLanExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#backhaul_interface ExtensioncontrollerFortigateprofile#backhaul_interface}
  */
  readonly backhaulInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#backhaul_ip ExtensioncontrollerFortigateprofile#backhaul_ip}
  */
  readonly backhaulIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#ipsec_tunnel ExtensioncontrollerFortigateprofile#ipsec_tunnel}
  */
  readonly ipsecTunnel?: string;
}

export function extensioncontrollerFortigateprofileLanExtensionToTerraform(struct?: ExtensioncontrollerFortigateprofileLanExtensionOutputReference | ExtensioncontrollerFortigateprofileLanExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backhaul_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backhaulInterface),
    backhaul_ip: cdktf.stringToTerraform(struct!.backhaulIp),
    ipsec_tunnel: cdktf.stringToTerraform(struct!.ipsecTunnel),
  }
}


export function extensioncontrollerFortigateprofileLanExtensionToHclTerraform(struct?: ExtensioncontrollerFortigateprofileLanExtensionOutputReference | ExtensioncontrollerFortigateprofileLanExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backhaul_interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backhaulInterface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    backhaul_ip: {
      value: cdktf.stringToHclTerraform(struct!.backhaulIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.ipsecTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerFortigateprofileLanExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerFortigateprofileLanExtension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backhaulInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.backhaulInterface = this._backhaulInterface;
    }
    if (this._backhaulIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.backhaulIp = this._backhaulIp;
    }
    if (this._ipsecTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTunnel = this._ipsecTunnel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtensioncontrollerFortigateprofileLanExtension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backhaulInterface = undefined;
      this._backhaulIp = undefined;
      this._ipsecTunnel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backhaulInterface = value.backhaulInterface;
      this._backhaulIp = value.backhaulIp;
      this._ipsecTunnel = value.ipsecTunnel;
    }
  }

  // backhaul_interface - computed: true, optional: true, required: false
  private _backhaulInterface?: string[]; 
  public get backhaulInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('backhaul_interface'));
  }
  public set backhaulInterface(value: string[]) {
    this._backhaulInterface = value;
  }
  public resetBackhaulInterface() {
    this._backhaulInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulInterfaceInput() {
    return this._backhaulInterface;
  }

  // backhaul_ip - computed: false, optional: true, required: false
  private _backhaulIp?: string; 
  public get backhaulIp() {
    return this.getStringAttribute('backhaul_ip');
  }
  public set backhaulIp(value: string) {
    this._backhaulIp = value;
  }
  public resetBackhaulIp() {
    this._backhaulIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulIpInput() {
    return this._backhaulIp;
  }

  // ipsec_tunnel - computed: false, optional: true, required: false
  private _ipsecTunnel?: string; 
  public get ipsecTunnel() {
    return this.getStringAttribute('ipsec_tunnel');
  }
  public set ipsecTunnel(value: string) {
    this._ipsecTunnel = value;
  }
  public resetIpsecTunnel() {
    this._ipsecTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelInput() {
    return this._ipsecTunnel;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile fmgdevice_extensioncontroller_fortigateprofile}
*/
export class ExtensioncontrollerFortigateprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_extensioncontroller_fortigateprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtensioncontrollerFortigateprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtensioncontrollerFortigateprofile to import
  * @param importFromId The id of the existing ExtensioncontrollerFortigateprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtensioncontrollerFortigateprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_extensioncontroller_fortigateprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extensioncontroller_fortigateprofile fmgdevice_extensioncontroller_fortigateprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensioncontrollerFortigateprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExtensioncontrollerFortigateprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_extensioncontroller_fortigateprofile',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._extension = config.extension;
    this._fosid = config.fosid;
    this._id = config.id;
    this._name = config.name;
    this._lanExtension.internalValue = config.lanExtension;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // extension - computed: true, optional: true, required: false
  private _extension?: string; 
  public get extension() {
    return this.getStringAttribute('extension');
  }
  public set extension(value: string) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // lan_extension - computed: false, optional: true, required: false
  private _lanExtension = new ExtensioncontrollerFortigateprofileLanExtensionOutputReference(this, "lan_extension");
  public get lanExtension() {
    return this._lanExtension;
  }
  public putLanExtension(value: ExtensioncontrollerFortigateprofileLanExtension) {
    this._lanExtension.internalValue = value;
  }
  public resetLanExtension() {
    this._lanExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanExtensionInput() {
    return this._lanExtension.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      extension: cdktf.stringToTerraform(this._extension),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      lan_extension: extensioncontrollerFortigateprofileLanExtensionToTerraform(this._lanExtension.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension: {
        value: cdktf.stringToHclTerraform(this._extension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      lan_extension: {
        value: extensioncontrollerFortigateprofileLanExtensionToHclTerraform(this._lanExtension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtensioncontrollerFortigateprofileLanExtensionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
