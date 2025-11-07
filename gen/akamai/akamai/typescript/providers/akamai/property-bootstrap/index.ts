// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_bootstrap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PropertyBootstrapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Contract ID to be assigned to the Property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_bootstrap#contract_id PropertyBootstrap#contract_id}
  */
  readonly contractId: string;
  /**
  * Group ID to be assigned to the Property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_bootstrap#group_id PropertyBootstrap#group_id}
  */
  readonly groupId: string;
  /**
  * Name to give to the Property (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_bootstrap#name PropertyBootstrap#name}
  */
  readonly name: string;
  /**
  * Product ID to be assigned to the Property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_bootstrap#product_id PropertyBootstrap#product_id}
  */
  readonly productId: string;
  /**
  * Specifies whether hostname bucket is used with this property. It allows you to add or remove property hostnames without incrementing property versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_bootstrap#use_hostname_bucket PropertyBootstrap#use_hostname_bucket}
  */
  readonly useHostnameBucket?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_bootstrap akamai_property_bootstrap}
*/
export class PropertyBootstrap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_property_bootstrap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PropertyBootstrap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PropertyBootstrap to import
  * @param importFromId The id of the existing PropertyBootstrap that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_bootstrap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PropertyBootstrap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_property_bootstrap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_bootstrap akamai_property_bootstrap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PropertyBootstrapConfig
  */
  public constructor(scope: Construct, id: string, config: PropertyBootstrapConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_property_bootstrap',
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
    this._name = config.name;
    this._productId = config.productId;
    this._useHostnameBucket = config.useHostnameBucket;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // use_hostname_bucket - computed: true, optional: true, required: false
  private _useHostnameBucket?: boolean | cdktf.IResolvable; 
  public get useHostnameBucket() {
    return this.getBooleanAttribute('use_hostname_bucket');
  }
  public set useHostnameBucket(value: boolean | cdktf.IResolvable) {
    this._useHostnameBucket = value;
  }
  public resetUseHostnameBucket() {
    this._useHostnameBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostnameBucketInput() {
    return this._useHostnameBucket;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_id: cdktf.stringToTerraform(this._contractId),
      group_id: cdktf.stringToTerraform(this._groupId),
      name: cdktf.stringToTerraform(this._name),
      product_id: cdktf.stringToTerraform(this._productId),
      use_hostname_bucket: cdktf.booleanToTerraform(this._useHostnameBucket),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_hostname_bucket: {
        value: cdktf.booleanToHclTerraform(this._useHostnameBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
