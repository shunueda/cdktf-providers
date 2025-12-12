// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/billing_cloud_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingCloudBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of billing account to bind cloud to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/billing_cloud_binding#billing_account_id BillingCloudBinding#billing_account_id}
  */
  readonly billingAccountId: string;
  /**
  * Service Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/billing_cloud_binding#cloud_id BillingCloudBinding#cloud_id}
  */
  readonly cloudId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/billing_cloud_binding yandex_billing_cloud_binding}
*/
export class BillingCloudBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_billing_cloud_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BillingCloudBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BillingCloudBinding to import
  * @param importFromId The id of the existing BillingCloudBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/billing_cloud_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BillingCloudBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_billing_cloud_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/billing_cloud_binding yandex_billing_cloud_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingCloudBindingConfig
  */
  public constructor(scope: Construct, id: string, config: BillingCloudBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_billing_cloud_binding',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingAccountId = config.billingAccountId;
    this._cloudId = config.cloudId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account_id - computed: false, optional: false, required: true
  private _billingAccountId?: string; 
  public get billingAccountId() {
    return this.getStringAttribute('billing_account_id');
  }
  public set billingAccountId(value: string) {
    this._billingAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountIdInput() {
    return this._billingAccountId;
  }

  // cloud_id - computed: false, optional: false, required: true
  private _cloudId?: string; 
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }
  public set cloudId(value: string) {
    this._cloudId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdInput() {
    return this._cloudId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account_id: cdktf.stringToTerraform(this._billingAccountId),
      cloud_id: cdktf.stringToTerraform(this._cloudId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_account_id: {
        value: cdktf.stringToHclTerraform(this._billingAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_id: {
        value: cdktf.stringToHclTerraform(this._cloudId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
