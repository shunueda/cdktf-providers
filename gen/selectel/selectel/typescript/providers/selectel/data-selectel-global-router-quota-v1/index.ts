// https://registry.terraform.io/providers/selectel/selectel/7.3.0/docs/data-sources/global_router_quota_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSelectelGlobalRouterQuotaV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.3.0/docs/data-sources/global_router_quota_v1#id DataSelectelGlobalRouterQuotaV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.3.0/docs/data-sources/global_router_quota_v1#name DataSelectelGlobalRouterQuotaV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.3.0/docs/data-sources/global_router_quota_v1#scope DataSelectelGlobalRouterQuotaV1#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.3.0/docs/data-sources/global_router_quota_v1#scope_value DataSelectelGlobalRouterQuotaV1#scope_value}
  */
  readonly scopeValue?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.3.0/docs/data-sources/global_router_quota_v1 selectel_global_router_quota_v1}
*/
export class DataSelectelGlobalRouterQuotaV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_global_router_quota_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSelectelGlobalRouterQuotaV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSelectelGlobalRouterQuotaV1 to import
  * @param importFromId The id of the existing DataSelectelGlobalRouterQuotaV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.3.0/docs/data-sources/global_router_quota_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSelectelGlobalRouterQuotaV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_global_router_quota_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.3.0/docs/data-sources/global_router_quota_v1 selectel_global_router_quota_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSelectelGlobalRouterQuotaV1Config
  */
  public constructor(scope: Construct, id: string, config: DataSelectelGlobalRouterQuotaV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_global_router_quota_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.3.0',
        providerVersionConstraint: '7.3.0'
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
    this._name = config.name;
    this._scope = config.scope;
    this._scopeValue = config.scopeValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
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

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // scope_value - computed: true, optional: true, required: false
  private _scopeValue?: string; 
  public get scopeValue() {
    return this.getStringAttribute('scope_value');
  }
  public set scopeValue(value: string) {
    this._scopeValue = value;
  }
  public resetScopeValue() {
    this._scopeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeValueInput() {
    return this._scopeValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      scope_value: cdktf.stringToTerraform(this._scopeValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_value: {
        value: cdktf.stringToHclTerraform(this._scopeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
