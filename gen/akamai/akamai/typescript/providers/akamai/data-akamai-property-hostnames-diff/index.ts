// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostnames_diff
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiPropertyHostnamesDiffConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the contract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostnames_diff#contract_id DataAkamaiPropertyHostnamesDiff#contract_id}
  */
  readonly contractId?: string;
  /**
  * The unique identifier for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostnames_diff#group_id DataAkamaiPropertyHostnamesDiff#group_id}
  */
  readonly groupId?: string;
  /**
  * The unique identifier for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostnames_diff#property_id DataAkamaiPropertyHostnamesDiff#property_id}
  */
  readonly propertyId: string;
}
export interface DataAkamaiPropertyHostnamesDiffHostnames {
}

export function dataAkamaiPropertyHostnamesDiffHostnamesToTerraform(struct?: DataAkamaiPropertyHostnamesDiffHostnames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiPropertyHostnamesDiffHostnamesToHclTerraform(struct?: DataAkamaiPropertyHostnamesDiffHostnames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiPropertyHostnamesDiffHostnamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiPropertyHostnamesDiffHostnames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiPropertyHostnamesDiffHostnames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cname_from - computed: true, optional: false, required: false
  public get cnameFrom() {
    return this.getStringAttribute('cname_from');
  }

  // production_cert_provisioning_type - computed: true, optional: false, required: false
  public get productionCertProvisioningType() {
    return this.getStringAttribute('production_cert_provisioning_type');
  }

  // production_cname_to - computed: true, optional: false, required: false
  public get productionCnameTo() {
    return this.getStringAttribute('production_cname_to');
  }

  // production_cname_type - computed: true, optional: false, required: false
  public get productionCnameType() {
    return this.getStringAttribute('production_cname_type');
  }

  // production_edge_hostname_id - computed: true, optional: false, required: false
  public get productionEdgeHostnameId() {
    return this.getStringAttribute('production_edge_hostname_id');
  }

  // staging_cert_provisioning_type - computed: true, optional: false, required: false
  public get stagingCertProvisioningType() {
    return this.getStringAttribute('staging_cert_provisioning_type');
  }

  // staging_cname_to - computed: true, optional: false, required: false
  public get stagingCnameTo() {
    return this.getStringAttribute('staging_cname_to');
  }

  // staging_cname_type - computed: true, optional: false, required: false
  public get stagingCnameType() {
    return this.getStringAttribute('staging_cname_type');
  }

  // staging_edge_hostname_id - computed: true, optional: false, required: false
  public get stagingEdgeHostnameId() {
    return this.getStringAttribute('staging_edge_hostname_id');
  }
}

export class DataAkamaiPropertyHostnamesDiffHostnamesList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiPropertyHostnamesDiffHostnamesOutputReference {
    return new DataAkamaiPropertyHostnamesDiffHostnamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostnames_diff akamai_property_hostnames_diff}
*/
export class DataAkamaiPropertyHostnamesDiff extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_property_hostnames_diff";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiPropertyHostnamesDiff resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiPropertyHostnamesDiff to import
  * @param importFromId The id of the existing DataAkamaiPropertyHostnamesDiff that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostnames_diff#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiPropertyHostnamesDiff to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_property_hostnames_diff", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_hostnames_diff akamai_property_hostnames_diff} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiPropertyHostnamesDiffConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiPropertyHostnamesDiffConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_property_hostnames_diff',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractId = config.contractId;
    this._groupId = config.groupId;
    this._propertyId = config.propertyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // contract_id - computed: true, optional: true, required: false
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  public resetContractId() {
    this._contractId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // hostnames - computed: true, optional: false, required: false
  private _hostnames = new DataAkamaiPropertyHostnamesDiffHostnamesList(this, "hostnames", false);
  public get hostnames() {
    return this._hostnames;
  }

  // property_id - computed: false, optional: false, required: true
  private _propertyId?: string; 
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_id: cdktf.stringToTerraform(this._contractId),
      group_id: cdktf.stringToTerraform(this._groupId),
      property_id: cdktf.stringToTerraform(this._propertyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_id: {
        value: cdktf.stringToHclTerraform(this._propertyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
