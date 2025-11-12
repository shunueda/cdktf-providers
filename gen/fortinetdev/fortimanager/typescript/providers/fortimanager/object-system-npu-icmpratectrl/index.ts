// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuIcmpratectrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl#adom ObjectSystemNpuIcmpratectrl#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl#icmp_v4_bucket_size ObjectSystemNpuIcmpratectrl#icmp_v4_bucket_size}
  */
  readonly icmpV4BucketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl#icmp_v4_rate ObjectSystemNpuIcmpratectrl#icmp_v4_rate}
  */
  readonly icmpV4Rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl#icmp_v6_bucket_size ObjectSystemNpuIcmpratectrl#icmp_v6_bucket_size}
  */
  readonly icmpV6BucketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl#icmp_v6_rate ObjectSystemNpuIcmpratectrl#icmp_v6_rate}
  */
  readonly icmpV6Rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl#id ObjectSystemNpuIcmpratectrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl#scopetype ObjectSystemNpuIcmpratectrl#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl fortimanager_object_system_npu_icmpratectrl}
*/
export class ObjectSystemNpuIcmpratectrl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_icmpratectrl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuIcmpratectrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuIcmpratectrl to import
  * @param importFromId The id of the existing ObjectSystemNpuIcmpratectrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuIcmpratectrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_icmpratectrl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_icmpratectrl fortimanager_object_system_npu_icmpratectrl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuIcmpratectrlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuIcmpratectrlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_icmpratectrl',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._icmpV4BucketSize = config.icmpV4BucketSize;
    this._icmpV4Rate = config.icmpV4Rate;
    this._icmpV6BucketSize = config.icmpV6BucketSize;
    this._icmpV6Rate = config.icmpV6Rate;
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

  // icmp_v4_bucket_size - computed: false, optional: true, required: false
  private _icmpV4BucketSize?: number; 
  public get icmpV4BucketSize() {
    return this.getNumberAttribute('icmp_v4_bucket_size');
  }
  public set icmpV4BucketSize(value: number) {
    this._icmpV4BucketSize = value;
  }
  public resetIcmpV4BucketSize() {
    this._icmpV4BucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV4BucketSizeInput() {
    return this._icmpV4BucketSize;
  }

  // icmp_v4_rate - computed: true, optional: true, required: false
  private _icmpV4Rate?: number; 
  public get icmpV4Rate() {
    return this.getNumberAttribute('icmp_v4_rate');
  }
  public set icmpV4Rate(value: number) {
    this._icmpV4Rate = value;
  }
  public resetIcmpV4Rate() {
    this._icmpV4Rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV4RateInput() {
    return this._icmpV4Rate;
  }

  // icmp_v6_bucket_size - computed: true, optional: true, required: false
  private _icmpV6BucketSize?: number; 
  public get icmpV6BucketSize() {
    return this.getNumberAttribute('icmp_v6_bucket_size');
  }
  public set icmpV6BucketSize(value: number) {
    this._icmpV6BucketSize = value;
  }
  public resetIcmpV6BucketSize() {
    this._icmpV6BucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV6BucketSizeInput() {
    return this._icmpV6BucketSize;
  }

  // icmp_v6_rate - computed: true, optional: true, required: false
  private _icmpV6Rate?: number; 
  public get icmpV6Rate() {
    return this.getNumberAttribute('icmp_v6_rate');
  }
  public set icmpV6Rate(value: number) {
    this._icmpV6Rate = value;
  }
  public resetIcmpV6Rate() {
    this._icmpV6Rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV6RateInput() {
    return this._icmpV6Rate;
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
      icmp_v4_bucket_size: cdktf.numberToTerraform(this._icmpV4BucketSize),
      icmp_v4_rate: cdktf.numberToTerraform(this._icmpV4Rate),
      icmp_v6_bucket_size: cdktf.numberToTerraform(this._icmpV6BucketSize),
      icmp_v6_rate: cdktf.numberToTerraform(this._icmpV6Rate),
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
      icmp_v4_bucket_size: {
        value: cdktf.numberToHclTerraform(this._icmpV4BucketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_v4_rate: {
        value: cdktf.numberToHclTerraform(this._icmpV4Rate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_v6_bucket_size: {
        value: cdktf.numberToHclTerraform(this._icmpV6BucketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_v6_rate: {
        value: cdktf.numberToHclTerraform(this._icmpV6Rate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
