// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_service_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomServiceOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IDs of Custom Services for .Net in the desired order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_service_order#dotnet CustomServiceOrder#dotnet}
  */
  readonly dotnet?: string[];
  /**
  * The IDs of Custom Services for Golang in the desired order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_service_order#golang CustomServiceOrder#golang}
  */
  readonly golang?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_service_order#id CustomServiceOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IDs of Custom Services for Java in the desired order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_service_order#java CustomServiceOrder#java}
  */
  readonly java?: string[];
  /**
  * The IDs of Custom Services for NodeJS in the desired order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_service_order#nodejs CustomServiceOrder#nodejs}
  */
  readonly nodejs?: string[];
  /**
  * The IDs of Custom Services for PHP in the desired order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_service_order#php CustomServiceOrder#php}
  */
  readonly php?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_service_order dynatrace_custom_service_order}
*/
export class CustomServiceOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_custom_service_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomServiceOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomServiceOrder to import
  * @param importFromId The id of the existing CustomServiceOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_service_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomServiceOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_custom_service_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_service_order dynatrace_custom_service_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomServiceOrderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CustomServiceOrderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_custom_service_order',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dotnet = config.dotnet;
    this._golang = config.golang;
    this._id = config.id;
    this._java = config.java;
    this._nodejs = config.nodejs;
    this._php = config.php;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dotnet - computed: false, optional: true, required: false
  private _dotnet?: string[]; 
  public get dotnet() {
    return this.getListAttribute('dotnet');
  }
  public set dotnet(value: string[]) {
    this._dotnet = value;
  }
  public resetDotnet() {
    this._dotnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotnetInput() {
    return this._dotnet;
  }

  // golang - computed: false, optional: true, required: false
  private _golang?: string[]; 
  public get golang() {
    return this.getListAttribute('golang');
  }
  public set golang(value: string[]) {
    this._golang = value;
  }
  public resetGolang() {
    this._golang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get golangInput() {
    return this._golang;
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

  // java - computed: false, optional: true, required: false
  private _java?: string[]; 
  public get java() {
    return this.getListAttribute('java');
  }
  public set java(value: string[]) {
    this._java = value;
  }
  public resetJava() {
    this._java = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaInput() {
    return this._java;
  }

  // nodejs - computed: false, optional: true, required: false
  private _nodejs?: string[]; 
  public get nodejs() {
    return this.getListAttribute('nodejs');
  }
  public set nodejs(value: string[]) {
    this._nodejs = value;
  }
  public resetNodejs() {
    this._nodejs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodejsInput() {
    return this._nodejs;
  }

  // php - computed: false, optional: true, required: false
  private _php?: string[]; 
  public get php() {
    return this.getListAttribute('php');
  }
  public set php(value: string[]) {
    this._php = value;
  }
  public resetPhp() {
    this._php = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phpInput() {
    return this._php;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dotnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dotnet),
      golang: cdktf.listMapper(cdktf.stringToTerraform, false)(this._golang),
      id: cdktf.stringToTerraform(this._id),
      java: cdktf.listMapper(cdktf.stringToTerraform, false)(this._java),
      nodejs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodejs),
      php: cdktf.listMapper(cdktf.stringToTerraform, false)(this._php),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dotnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dotnet),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      golang: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._golang),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      java: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._java),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nodejs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodejs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      php: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._php),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
