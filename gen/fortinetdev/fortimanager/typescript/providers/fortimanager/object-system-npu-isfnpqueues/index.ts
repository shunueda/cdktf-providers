// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuIsfnpqueuesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#adom ObjectSystemNpuIsfnpqueues#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#cos0 ObjectSystemNpuIsfnpqueues#cos0}
  */
  readonly cos0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#cos1 ObjectSystemNpuIsfnpqueues#cos1}
  */
  readonly cos1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#cos2 ObjectSystemNpuIsfnpqueues#cos2}
  */
  readonly cos2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#cos3 ObjectSystemNpuIsfnpqueues#cos3}
  */
  readonly cos3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#cos4 ObjectSystemNpuIsfnpqueues#cos4}
  */
  readonly cos4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#cos5 ObjectSystemNpuIsfnpqueues#cos5}
  */
  readonly cos5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#cos6 ObjectSystemNpuIsfnpqueues#cos6}
  */
  readonly cos6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#cos7 ObjectSystemNpuIsfnpqueues#cos7}
  */
  readonly cos7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#id ObjectSystemNpuIsfnpqueues#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#scopetype ObjectSystemNpuIsfnpqueues#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues fortimanager_object_system_npu_isfnpqueues}
*/
export class ObjectSystemNpuIsfnpqueues extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_isfnpqueues";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuIsfnpqueues resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuIsfnpqueues to import
  * @param importFromId The id of the existing ObjectSystemNpuIsfnpqueues that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuIsfnpqueues to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_isfnpqueues", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_isfnpqueues fortimanager_object_system_npu_isfnpqueues} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuIsfnpqueuesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuIsfnpqueuesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_isfnpqueues',
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
    this._cos0 = config.cos0;
    this._cos1 = config.cos1;
    this._cos2 = config.cos2;
    this._cos3 = config.cos3;
    this._cos4 = config.cos4;
    this._cos5 = config.cos5;
    this._cos6 = config.cos6;
    this._cos7 = config.cos7;
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

  // cos0 - computed: false, optional: true, required: false
  private _cos0?: string; 
  public get cos0() {
    return this.getStringAttribute('cos0');
  }
  public set cos0(value: string) {
    this._cos0 = value;
  }
  public resetCos0() {
    this._cos0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos0Input() {
    return this._cos0;
  }

  // cos1 - computed: false, optional: true, required: false
  private _cos1?: string; 
  public get cos1() {
    return this.getStringAttribute('cos1');
  }
  public set cos1(value: string) {
    this._cos1 = value;
  }
  public resetCos1() {
    this._cos1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos1Input() {
    return this._cos1;
  }

  // cos2 - computed: false, optional: true, required: false
  private _cos2?: string; 
  public get cos2() {
    return this.getStringAttribute('cos2');
  }
  public set cos2(value: string) {
    this._cos2 = value;
  }
  public resetCos2() {
    this._cos2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos2Input() {
    return this._cos2;
  }

  // cos3 - computed: false, optional: true, required: false
  private _cos3?: string; 
  public get cos3() {
    return this.getStringAttribute('cos3');
  }
  public set cos3(value: string) {
    this._cos3 = value;
  }
  public resetCos3() {
    this._cos3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos3Input() {
    return this._cos3;
  }

  // cos4 - computed: false, optional: true, required: false
  private _cos4?: string; 
  public get cos4() {
    return this.getStringAttribute('cos4');
  }
  public set cos4(value: string) {
    this._cos4 = value;
  }
  public resetCos4() {
    this._cos4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos4Input() {
    return this._cos4;
  }

  // cos5 - computed: false, optional: true, required: false
  private _cos5?: string; 
  public get cos5() {
    return this.getStringAttribute('cos5');
  }
  public set cos5(value: string) {
    this._cos5 = value;
  }
  public resetCos5() {
    this._cos5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos5Input() {
    return this._cos5;
  }

  // cos6 - computed: false, optional: true, required: false
  private _cos6?: string; 
  public get cos6() {
    return this.getStringAttribute('cos6');
  }
  public set cos6(value: string) {
    this._cos6 = value;
  }
  public resetCos6() {
    this._cos6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos6Input() {
    return this._cos6;
  }

  // cos7 - computed: false, optional: true, required: false
  private _cos7?: string; 
  public get cos7() {
    return this.getStringAttribute('cos7');
  }
  public set cos7(value: string) {
    this._cos7 = value;
  }
  public resetCos7() {
    this._cos7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cos7Input() {
    return this._cos7;
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
      cos0: cdktf.stringToTerraform(this._cos0),
      cos1: cdktf.stringToTerraform(this._cos1),
      cos2: cdktf.stringToTerraform(this._cos2),
      cos3: cdktf.stringToTerraform(this._cos3),
      cos4: cdktf.stringToTerraform(this._cos4),
      cos5: cdktf.stringToTerraform(this._cos5),
      cos6: cdktf.stringToTerraform(this._cos6),
      cos7: cdktf.stringToTerraform(this._cos7),
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
      cos0: {
        value: cdktf.stringToHclTerraform(this._cos0),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos1: {
        value: cdktf.stringToHclTerraform(this._cos1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos2: {
        value: cdktf.stringToHclTerraform(this._cos2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos3: {
        value: cdktf.stringToHclTerraform(this._cos3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos4: {
        value: cdktf.stringToHclTerraform(this._cos4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos5: {
        value: cdktf.stringToHclTerraform(this._cos5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos6: {
        value: cdktf.stringToHclTerraform(this._cos6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos7: {
        value: cdktf.stringToHclTerraform(this._cos7),
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
