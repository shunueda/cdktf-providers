// https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/payment_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudPaymentMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of card that the payment method should be, such as `Visa`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/payment_method#card_type DataRediscloudPaymentMethod#card_type}
  */
  readonly cardType?: string;
  /**
  * Whether to exclude any expired cards or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/payment_method#exclude_expired DataRediscloudPaymentMethod#exclude_expired}
  */
  readonly excludeExpired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/payment_method#id DataRediscloudPaymentMethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Last four numbers of the card of the payment method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/payment_method#last_four_numbers DataRediscloudPaymentMethod#last_four_numbers}
  */
  readonly lastFourNumbers?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/payment_method rediscloud_payment_method}
*/
export class DataRediscloudPaymentMethod extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_payment_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudPaymentMethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudPaymentMethod to import
  * @param importFromId The id of the existing DataRediscloudPaymentMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/payment_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudPaymentMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_payment_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/payment_method rediscloud_payment_method} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudPaymentMethodConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudPaymentMethodConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_payment_method',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
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
    this._cardType = config.cardType;
    this._excludeExpired = config.excludeExpired;
    this._id = config.id;
    this._lastFourNumbers = config.lastFourNumbers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // card_type - computed: true, optional: true, required: false
  private _cardType?: string; 
  public get cardType() {
    return this.getStringAttribute('card_type');
  }
  public set cardType(value: string) {
    this._cardType = value;
  }
  public resetCardType() {
    this._cardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardTypeInput() {
    return this._cardType;
  }

  // exclude_expired - computed: false, optional: true, required: false
  private _excludeExpired?: boolean | cdktf.IResolvable; 
  public get excludeExpired() {
    return this.getBooleanAttribute('exclude_expired');
  }
  public set excludeExpired(value: boolean | cdktf.IResolvable) {
    this._excludeExpired = value;
  }
  public resetExcludeExpired() {
    this._excludeExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeExpiredInput() {
    return this._excludeExpired;
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

  // last_four_numbers - computed: true, optional: true, required: false
  private _lastFourNumbers?: string; 
  public get lastFourNumbers() {
    return this.getStringAttribute('last_four_numbers');
  }
  public set lastFourNumbers(value: string) {
    this._lastFourNumbers = value;
  }
  public resetLastFourNumbers() {
    this._lastFourNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastFourNumbersInput() {
    return this._lastFourNumbers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      card_type: cdktf.stringToTerraform(this._cardType),
      exclude_expired: cdktf.booleanToTerraform(this._excludeExpired),
      id: cdktf.stringToTerraform(this._id),
      last_four_numbers: cdktf.stringToTerraform(this._lastFourNumbers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      card_type: {
        value: cdktf.stringToHclTerraform(this._cardType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_expired: {
        value: cdktf.booleanToHclTerraform(this._excludeExpired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_four_numbers: {
        value: cdktf.stringToHclTerraform(this._lastFourNumbers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
