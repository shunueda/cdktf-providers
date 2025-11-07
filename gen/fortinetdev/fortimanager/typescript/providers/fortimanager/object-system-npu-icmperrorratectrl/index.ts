// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuIcmperrorratectrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl#adom ObjectSystemNpuIcmperrorratectrl#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl#icmpv4_error_bucket_size ObjectSystemNpuIcmperrorratectrl#icmpv4_error_bucket_size}
  */
  readonly icmpv4ErrorBucketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl#icmpv4_error_rate ObjectSystemNpuIcmperrorratectrl#icmpv4_error_rate}
  */
  readonly icmpv4ErrorRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl#icmpv4_error_rate_limit ObjectSystemNpuIcmperrorratectrl#icmpv4_error_rate_limit}
  */
  readonly icmpv4ErrorRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl#icmpv6_error_bucket_size ObjectSystemNpuIcmperrorratectrl#icmpv6_error_bucket_size}
  */
  readonly icmpv6ErrorBucketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl#icmpv6_error_rate ObjectSystemNpuIcmperrorratectrl#icmpv6_error_rate}
  */
  readonly icmpv6ErrorRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl#icmpv6_error_rate_limit ObjectSystemNpuIcmperrorratectrl#icmpv6_error_rate_limit}
  */
  readonly icmpv6ErrorRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl#id ObjectSystemNpuIcmperrorratectrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl#scopetype ObjectSystemNpuIcmperrorratectrl#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl fortimanager_object_system_npu_icmperrorratectrl}
*/
export class ObjectSystemNpuIcmperrorratectrl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_icmperrorratectrl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuIcmperrorratectrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuIcmperrorratectrl to import
  * @param importFromId The id of the existing ObjectSystemNpuIcmperrorratectrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuIcmperrorratectrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_icmperrorratectrl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmperrorratectrl fortimanager_object_system_npu_icmperrorratectrl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuIcmperrorratectrlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuIcmperrorratectrlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_icmperrorratectrl',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._icmpv4ErrorBucketSize = config.icmpv4ErrorBucketSize;
    this._icmpv4ErrorRate = config.icmpv4ErrorRate;
    this._icmpv4ErrorRateLimit = config.icmpv4ErrorRateLimit;
    this._icmpv6ErrorBucketSize = config.icmpv6ErrorBucketSize;
    this._icmpv6ErrorRate = config.icmpv6ErrorRate;
    this._icmpv6ErrorRateLimit = config.icmpv6ErrorRateLimit;
    this._id = config.id;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // icmpv4_error_bucket_size - computed: true, optional: true, required: false
  private _icmpv4ErrorBucketSize?: number; 
  public get icmpv4ErrorBucketSize() {
    return this.getNumberAttribute('icmpv4_error_bucket_size');
  }
  public set icmpv4ErrorBucketSize(value: number) {
    this._icmpv4ErrorBucketSize = value;
  }
  public resetIcmpv4ErrorBucketSize() {
    this._icmpv4ErrorBucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv4ErrorBucketSizeInput() {
    return this._icmpv4ErrorBucketSize;
  }

  // icmpv4_error_rate - computed: true, optional: true, required: false
  private _icmpv4ErrorRate?: number; 
  public get icmpv4ErrorRate() {
    return this.getNumberAttribute('icmpv4_error_rate');
  }
  public set icmpv4ErrorRate(value: number) {
    this._icmpv4ErrorRate = value;
  }
  public resetIcmpv4ErrorRate() {
    this._icmpv4ErrorRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv4ErrorRateInput() {
    return this._icmpv4ErrorRate;
  }

  // icmpv4_error_rate_limit - computed: true, optional: true, required: false
  private _icmpv4ErrorRateLimit?: string; 
  public get icmpv4ErrorRateLimit() {
    return this.getStringAttribute('icmpv4_error_rate_limit');
  }
  public set icmpv4ErrorRateLimit(value: string) {
    this._icmpv4ErrorRateLimit = value;
  }
  public resetIcmpv4ErrorRateLimit() {
    this._icmpv4ErrorRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv4ErrorRateLimitInput() {
    return this._icmpv4ErrorRateLimit;
  }

  // icmpv6_error_bucket_size - computed: true, optional: true, required: false
  private _icmpv6ErrorBucketSize?: number; 
  public get icmpv6ErrorBucketSize() {
    return this.getNumberAttribute('icmpv6_error_bucket_size');
  }
  public set icmpv6ErrorBucketSize(value: number) {
    this._icmpv6ErrorBucketSize = value;
  }
  public resetIcmpv6ErrorBucketSize() {
    this._icmpv6ErrorBucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ErrorBucketSizeInput() {
    return this._icmpv6ErrorBucketSize;
  }

  // icmpv6_error_rate - computed: true, optional: true, required: false
  private _icmpv6ErrorRate?: number; 
  public get icmpv6ErrorRate() {
    return this.getNumberAttribute('icmpv6_error_rate');
  }
  public set icmpv6ErrorRate(value: number) {
    this._icmpv6ErrorRate = value;
  }
  public resetIcmpv6ErrorRate() {
    this._icmpv6ErrorRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ErrorRateInput() {
    return this._icmpv6ErrorRate;
  }

  // icmpv6_error_rate_limit - computed: true, optional: true, required: false
  private _icmpv6ErrorRateLimit?: string; 
  public get icmpv6ErrorRateLimit() {
    return this.getStringAttribute('icmpv6_error_rate_limit');
  }
  public set icmpv6ErrorRateLimit(value: string) {
    this._icmpv6ErrorRateLimit = value;
  }
  public resetIcmpv6ErrorRateLimit() {
    this._icmpv6ErrorRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ErrorRateLimitInput() {
    return this._icmpv6ErrorRateLimit;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      icmpv4_error_bucket_size: cdktf.numberToTerraform(this._icmpv4ErrorBucketSize),
      icmpv4_error_rate: cdktf.numberToTerraform(this._icmpv4ErrorRate),
      icmpv4_error_rate_limit: cdktf.stringToTerraform(this._icmpv4ErrorRateLimit),
      icmpv6_error_bucket_size: cdktf.numberToTerraform(this._icmpv6ErrorBucketSize),
      icmpv6_error_rate: cdktf.numberToTerraform(this._icmpv6ErrorRate),
      icmpv6_error_rate_limit: cdktf.stringToTerraform(this._icmpv6ErrorRateLimit),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpv4_error_bucket_size: {
        value: cdktf.numberToHclTerraform(this._icmpv4ErrorBucketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv4_error_rate: {
        value: cdktf.numberToHclTerraform(this._icmpv4ErrorRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv4_error_rate_limit: {
        value: cdktf.stringToHclTerraform(this._icmpv4ErrorRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpv6_error_bucket_size: {
        value: cdktf.numberToHclTerraform(this._icmpv6ErrorBucketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv6_error_rate: {
        value: cdktf.numberToHclTerraform(this._icmpv6ErrorRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv6_error_rate_limit: {
        value: cdktf.stringToHclTerraform(this._icmpv6ErrorRateLimit),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
