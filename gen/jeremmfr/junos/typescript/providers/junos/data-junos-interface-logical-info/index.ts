// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJunosInterfaceLogicalInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of logical interface (with dot).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical_info#name DataJunosInterfaceLogicalInfo#name}
  */
  readonly name: string;
}
export interface DataJunosInterfaceLogicalInfoFamilyInet {
}

export function dataJunosInterfaceLogicalInfoFamilyInetToTerraform(struct?: DataJunosInterfaceLogicalInfoFamilyInet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalInfoFamilyInetToHclTerraform(struct?: DataJunosInterfaceLogicalInfoFamilyInet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalInfoFamilyInetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfaceLogicalInfoFamilyInet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalInfoFamilyInet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_cidr - computed: true, optional: false, required: false
  public get addressCidr() {
    return this.getListAttribute('address_cidr');
  }
}
export interface DataJunosInterfaceLogicalInfoFamilyInet6 {
}

export function dataJunosInterfaceLogicalInfoFamilyInet6ToTerraform(struct?: DataJunosInterfaceLogicalInfoFamilyInet6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosInterfaceLogicalInfoFamilyInet6ToHclTerraform(struct?: DataJunosInterfaceLogicalInfoFamilyInet6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosInterfaceLogicalInfoFamilyInet6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataJunosInterfaceLogicalInfoFamilyInet6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosInterfaceLogicalInfoFamilyInet6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_cidr - computed: true, optional: false, required: false
  public get addressCidr() {
    return this.getListAttribute('address_cidr');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical_info junos_interface_logical_info}
*/
export class DataJunosInterfaceLogicalInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_interface_logical_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJunosInterfaceLogicalInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJunosInterfaceLogicalInfo to import
  * @param importFromId The id of the existing DataJunosInterfaceLogicalInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJunosInterfaceLogicalInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_interface_logical_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/interface_logical_info junos_interface_logical_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJunosInterfaceLogicalInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataJunosInterfaceLogicalInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_interface_logical_info',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // family_inet - computed: true, optional: false, required: false
  private _familyInet = new DataJunosInterfaceLogicalInfoFamilyInetOutputReference(this, "family_inet");
  public get familyInet() {
    return this._familyInet;
  }

  // family_inet6 - computed: true, optional: false, required: false
  private _familyInet6 = new DataJunosInterfaceLogicalInfoFamilyInet6OutputReference(this, "family_inet6");
  public get familyInet6() {
    return this._familyInet6;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // oper_status - computed: true, optional: false, required: false
  public get operStatus() {
    return this.getStringAttribute('oper_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
