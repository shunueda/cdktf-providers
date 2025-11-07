// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseEndpointsSoftwareOnEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device ID of the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint#device_id DataFortisaseEndpointsSoftwareOnEndpoint#device_id}
  */
  readonly deviceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint#software DataFortisaseEndpointsSoftwareOnEndpoint#software}
  */
  readonly softwareAttribute?: DataFortisaseEndpointsSoftwareOnEndpointSoftware[] | cdktf.IResolvable;
}
export interface DataFortisaseEndpointsSoftwareOnEndpointSoftware {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint#icon DataFortisaseEndpointsSoftwareOnEndpoint#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint#id DataFortisaseEndpointsSoftwareOnEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint#install_date DataFortisaseEndpointsSoftwareOnEndpoint#install_date}
  */
  readonly installDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint#name DataFortisaseEndpointsSoftwareOnEndpoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint#vendor DataFortisaseEndpointsSoftwareOnEndpoint#vendor}
  */
  readonly vendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint#version DataFortisaseEndpointsSoftwareOnEndpoint#version}
  */
  readonly version?: string;
}

export function dataFortisaseEndpointsSoftwareOnEndpointSoftwareToTerraform(struct?: DataFortisaseEndpointsSoftwareOnEndpointSoftware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon: cdktf.stringToTerraform(struct!.icon),
    id: cdktf.numberToTerraform(struct!.id),
    install_date: cdktf.stringToTerraform(struct!.installDate),
    name: cdktf.stringToTerraform(struct!.name),
    vendor: cdktf.stringToTerraform(struct!.vendor),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataFortisaseEndpointsSoftwareOnEndpointSoftwareToHclTerraform(struct?: DataFortisaseEndpointsSoftwareOnEndpointSoftware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    install_date: {
      value: cdktf.stringToHclTerraform(struct!.installDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsSoftwareOnEndpointSoftwareOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointsSoftwareOnEndpointSoftware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._installDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.installDate = this._installDate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsSoftwareOnEndpointSoftware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icon = undefined;
      this._id = undefined;
      this._installDate = undefined;
      this._name = undefined;
      this._vendor = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icon = value.icon;
      this._id = value.id;
      this._installDate = value.installDate;
      this._name = value.name;
      this._vendor = value.vendor;
      this._version = value.version;
    }
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // install_date - computed: true, optional: true, required: false
  private _installDate?: string; 
  public get installDate() {
    return this.getStringAttribute('install_date');
  }
  public set installDate(value: string) {
    this._installDate = value;
  }
  public resetInstallDate() {
    this._installDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installDateInput() {
    return this._installDate;
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

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // version - computed: true, optional: true, required: false
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
}

export class DataFortisaseEndpointsSoftwareOnEndpointSoftwareList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointsSoftwareOnEndpointSoftware[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointsSoftwareOnEndpointSoftwareOutputReference {
    return new DataFortisaseEndpointsSoftwareOnEndpointSoftwareOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint fortisase_endpoints_software_on_endpoint}
*/
export class DataFortisaseEndpointsSoftwareOnEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoints_software_on_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseEndpointsSoftwareOnEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseEndpointsSoftwareOnEndpoint to import
  * @param importFromId The id of the existing DataFortisaseEndpointsSoftwareOnEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseEndpointsSoftwareOnEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoints_software_on_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_software_on_endpoint fortisase_endpoints_software_on_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseEndpointsSoftwareOnEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseEndpointsSoftwareOnEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoints_software_on_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._software.internalValue = config.softwareAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // software - computed: true, optional: true, required: false
  private _software = new DataFortisaseEndpointsSoftwareOnEndpointSoftwareList(this, "software", false);
  public get softwareAttribute() {
    return this._software;
  }
  public putSoftwareAttribute(value: DataFortisaseEndpointsSoftwareOnEndpointSoftware[] | cdktf.IResolvable) {
    this._software.internalValue = value;
  }
  public resetSoftwareAttribute() {
    this._software.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAttributeInput() {
    return this._software.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.numberToTerraform(this._deviceId),
      software: cdktf.listMapper(dataFortisaseEndpointsSoftwareOnEndpointSoftwareToTerraform, false)(this._software.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      software: {
        value: cdktf.listMapperHcl(dataFortisaseEndpointsSoftwareOnEndpointSoftwareToHclTerraform, false)(this._software.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseEndpointsSoftwareOnEndpointSoftwareList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
