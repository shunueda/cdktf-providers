// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/order_cart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhOrderCartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Assign a shopping cart to a logged in client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/order_cart#assign DataOvhOrderCart#assign}
  */
  readonly assign?: boolean | cdktf.IResolvable;
  /**
  * Description of your cart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/order_cart#description DataOvhOrderCart#description}
  */
  readonly description?: string;
  /**
  * Expiration time (format: 2006-01-02T15:04:05Z07:00)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/order_cart#expire DataOvhOrderCart#expire}
  */
  readonly expire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/order_cart#id DataOvhOrderCart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ovh Subsidiary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/order_cart#ovh_subsidiary DataOvhOrderCart#ovh_subsidiary}
  */
  readonly ovhSubsidiary: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/order_cart ovh_order_cart}
*/
export class DataOvhOrderCart extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_order_cart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhOrderCart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhOrderCart to import
  * @param importFromId The id of the existing DataOvhOrderCart that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/order_cart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhOrderCart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_order_cart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/order_cart ovh_order_cart} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhOrderCartConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhOrderCartConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_order_cart',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assign = config.assign;
    this._description = config.description;
    this._expire = config.expire;
    this._id = config.id;
    this._ovhSubsidiary = config.ovhSubsidiary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign - computed: false, optional: true, required: false
  private _assign?: boolean | cdktf.IResolvable; 
  public get assign() {
    return this.getBooleanAttribute('assign');
  }
  public set assign(value: boolean | cdktf.IResolvable) {
    this._assign = value;
  }
  public resetAssign() {
    this._assign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignInput() {
    return this._assign;
  }

  // cart_id - computed: true, optional: false, required: false
  public get cartId() {
    return this.getStringAttribute('cart_id');
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

  // expire - computed: true, optional: true, required: false
  private _expire?: string; 
  public get expire() {
    return this.getStringAttribute('expire');
  }
  public set expire(value: string) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
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

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getNumberListAttribute('items');
  }

  // ovh_subsidiary - computed: false, optional: false, required: true
  private _ovhSubsidiary?: string; 
  public get ovhSubsidiary() {
    return this.getStringAttribute('ovh_subsidiary');
  }
  public set ovhSubsidiary(value: string) {
    this._ovhSubsidiary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ovhSubsidiaryInput() {
    return this._ovhSubsidiary;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assign: cdktf.booleanToTerraform(this._assign),
      description: cdktf.stringToTerraform(this._description),
      expire: cdktf.stringToTerraform(this._expire),
      id: cdktf.stringToTerraform(this._id),
      ovh_subsidiary: cdktf.stringToTerraform(this._ovhSubsidiary),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign: {
        value: cdktf.booleanToHclTerraform(this._assign),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire: {
        value: cdktf.stringToHclTerraform(this._expire),
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
      ovh_subsidiary: {
        value: cdktf.stringToHclTerraform(this._ovhSubsidiary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
