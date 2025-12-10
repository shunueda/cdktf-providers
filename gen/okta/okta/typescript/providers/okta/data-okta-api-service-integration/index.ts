// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/api_service_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaApiServiceIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the API service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/api_service_integration#id DataOktaApiServiceIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * granted_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/api_service_integration#granted_scopes DataOktaApiServiceIntegration#granted_scopes}
  */
  readonly grantedScopes?: DataOktaApiServiceIntegrationGrantedScopes[] | cdktf.IResolvable;
}
export interface DataOktaApiServiceIntegrationGrantedScopes {
}

export function dataOktaApiServiceIntegrationGrantedScopesToTerraform(struct?: DataOktaApiServiceIntegrationGrantedScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaApiServiceIntegrationGrantedScopesToHclTerraform(struct?: DataOktaApiServiceIntegrationGrantedScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaApiServiceIntegrationGrantedScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaApiServiceIntegrationGrantedScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaApiServiceIntegrationGrantedScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataOktaApiServiceIntegrationGrantedScopesList extends cdktf.ComplexList {
  public internalValue? : DataOktaApiServiceIntegrationGrantedScopes[] | cdktf.IResolvable

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
  public get(index: number): DataOktaApiServiceIntegrationGrantedScopesOutputReference {
    return new DataOktaApiServiceIntegrationGrantedScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/api_service_integration okta_api_service_integration}
*/
export class DataOktaApiServiceIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_api_service_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaApiServiceIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaApiServiceIntegration to import
  * @param importFromId The id of the existing DataOktaApiServiceIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/api_service_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaApiServiceIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_api_service_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/api_service_integration okta_api_service_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaApiServiceIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaApiServiceIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_api_service_integration',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._grantedScopes.internalValue = config.grantedScopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_guide_url - computed: true, optional: false, required: false
  public get configGuideUrl() {
    return this.getStringAttribute('config_guide_url');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // granted_scopes - computed: false, optional: true, required: false
  private _grantedScopes = new DataOktaApiServiceIntegrationGrantedScopesList(this, "granted_scopes", true);
  public get grantedScopes() {
    return this._grantedScopes;
  }
  public putGrantedScopes(value: DataOktaApiServiceIntegrationGrantedScopes[] | cdktf.IResolvable) {
    this._grantedScopes.internalValue = value;
  }
  public resetGrantedScopes() {
    this._grantedScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantedScopesInput() {
    return this._grantedScopes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      granted_scopes: cdktf.listMapper(dataOktaApiServiceIntegrationGrantedScopesToTerraform, true)(this._grantedScopes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granted_scopes: {
        value: cdktf.listMapperHcl(dataOktaApiServiceIntegrationGrantedScopesToHclTerraform, true)(this._grantedScopes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOktaApiServiceIntegrationGrantedScopesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
