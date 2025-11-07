// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_resource_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppResourceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_resource_types#id WebAppResourceTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_resource_types#insert_after WebAppResourceTypes#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Possible Values: `CSS`, `IMAGE`, `OTHER`, `SCRIPT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_resource_types#primary_resource_type WebAppResourceTypes#primary_resource_type}
  */
  readonly primaryResourceType: string;
  /**
  * The regular expression to detect the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_resource_types#regular_expression WebAppResourceTypes#regular_expression}
  */
  readonly regularExpression: string;
  /**
  * The secondary type of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_resource_types#secondary_resource_type WebAppResourceTypes#secondary_resource_type}
  */
  readonly secondaryResourceType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_resource_types dynatrace_web_app_resource_types}
*/
export class WebAppResourceTypes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_resource_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppResourceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppResourceTypes to import
  * @param importFromId The id of the existing WebAppResourceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_resource_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppResourceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_resource_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_resource_types dynatrace_web_app_resource_types} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppResourceTypesConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppResourceTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_resource_types',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
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
    this._insertAfter = config.insertAfter;
    this._primaryResourceType = config.primaryResourceType;
    this._regularExpression = config.regularExpression;
    this._secondaryResourceType = config.secondaryResourceType;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // primary_resource_type - computed: false, optional: false, required: true
  private _primaryResourceType?: string; 
  public get primaryResourceType() {
    return this.getStringAttribute('primary_resource_type');
  }
  public set primaryResourceType(value: string) {
    this._primaryResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryResourceTypeInput() {
    return this._primaryResourceType;
  }

  // regular_expression - computed: false, optional: false, required: true
  private _regularExpression?: string; 
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }
  public set regularExpression(value: string) {
    this._regularExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regularExpressionInput() {
    return this._regularExpression;
  }

  // secondary_resource_type - computed: false, optional: true, required: false
  private _secondaryResourceType?: string; 
  public get secondaryResourceType() {
    return this.getStringAttribute('secondary_resource_type');
  }
  public set secondaryResourceType(value: string) {
    this._secondaryResourceType = value;
  }
  public resetSecondaryResourceType() {
    this._secondaryResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryResourceTypeInput() {
    return this._secondaryResourceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      primary_resource_type: cdktf.stringToTerraform(this._primaryResourceType),
      regular_expression: cdktf.stringToTerraform(this._regularExpression),
      secondary_resource_type: cdktf.stringToTerraform(this._secondaryResourceType),
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_resource_type: {
        value: cdktf.stringToHclTerraform(this._primaryResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regular_expression: {
        value: cdktf.stringToHclTerraform(this._regularExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_resource_type: {
        value: cdktf.stringToHclTerraform(this._secondaryResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
