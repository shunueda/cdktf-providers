// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataClumioPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activation status to be included in the query filter. Valid values are activated/deactivated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/policy#activation_status DataClumioPolicy#activation_status}
  */
  readonly activationStatus?: string;
  /**
  * The name of the policy to be included in the read policies query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/policy#name DataClumioPolicy#name}
  */
  readonly name?: string;
  /**
  * Operation types to be included in the read policies query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/policy#operation_types DataClumioPolicy#operation_types}
  */
  readonly operationTypes?: string[];
}
export interface DataClumioPolicyPolicies {
}

export function dataClumioPolicyPoliciesToTerraform(struct?: DataClumioPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataClumioPolicyPoliciesToHclTerraform(struct?: DataClumioPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataClumioPolicyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataClumioPolicyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataClumioPolicyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activation_status - computed: true, optional: false, required: false
  public get activationStatus() {
    return this.getStringAttribute('activation_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operation_types - computed: true, optional: false, required: false
  public get operationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_types'));
  }

  // organizational_unit_id - computed: true, optional: false, required: false
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataClumioPolicyPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataClumioPolicyPoliciesOutputReference {
    return new DataClumioPolicyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/policy clumio_policy}
*/
export class DataClumioPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataClumioPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataClumioPolicy to import
  * @param importFromId The id of the existing DataClumioPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataClumioPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/policy clumio_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataClumioPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataClumioPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'clumio_policy',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationStatus = config.activationStatus;
    this._name = config.name;
    this._operationTypes = config.operationTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_status - computed: false, optional: true, required: false
  private _activationStatus?: string; 
  public get activationStatus() {
    return this.getStringAttribute('activation_status');
  }
  public set activationStatus(value: string) {
    this._activationStatus = value;
  }
  public resetActivationStatus() {
    this._activationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationStatusInput() {
    return this._activationStatus;
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

  // operation_types - computed: false, optional: true, required: false
  private _operationTypes?: string[]; 
  public get operationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_types'));
  }
  public set operationTypes(value: string[]) {
    this._operationTypes = value;
  }
  public resetOperationTypes() {
    this._operationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypesInput() {
    return this._operationTypes;
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataClumioPolicyPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_status: cdktf.stringToTerraform(this._activationStatus),
      name: cdktf.stringToTerraform(this._name),
      operation_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operationTypes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_status: {
        value: cdktf.stringToHclTerraform(this._activationStatus),
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
      operation_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operationTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
