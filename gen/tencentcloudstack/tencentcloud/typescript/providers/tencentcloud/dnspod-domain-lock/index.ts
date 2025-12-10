// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dnspod_domain_lock
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnspodDomainLockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dnspod_domain_lock#domain DnspodDomainLock#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dnspod_domain_lock#id DnspodDomainLock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of max days to lock the domain+ Old packages: D_FREE 30 days, D_PLUS 90 days, D_EXTRA 30 days, D_EXPERT 60 days, D_ULTRA 365 days+ New packages: DP_FREE 365 days, DP_PLUS 365 days, DP_EXTRA 365 days, DP_EXPERT 365 days, DP_ULTRA 365 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dnspod_domain_lock#lock_days DnspodDomainLock#lock_days}
  */
  readonly lockDays: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dnspod_domain_lock tencentcloud_dnspod_domain_lock}
*/
export class DnspodDomainLock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dnspod_domain_lock";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnspodDomainLock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnspodDomainLock to import
  * @param importFromId The id of the existing DnspodDomainLock that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dnspod_domain_lock#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnspodDomainLock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dnspod_domain_lock", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/dnspod_domain_lock tencentcloud_dnspod_domain_lock} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnspodDomainLockConfig
  */
  public constructor(scope: Construct, id: string, config: DnspodDomainLockConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dnspod_domain_lock',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._lockDays = config.lockDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // lock_code - computed: true, optional: false, required: false
  public get lockCode() {
    return this.getStringAttribute('lock_code');
  }

  // lock_days - computed: false, optional: false, required: true
  private _lockDays?: number; 
  public get lockDays() {
    return this.getNumberAttribute('lock_days');
  }
  public set lockDays(value: number) {
    this._lockDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDaysInput() {
    return this._lockDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      lock_days: cdktf.numberToTerraform(this._lockDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      lock_days: {
        value: cdktf.numberToHclTerraform(this._lockDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
