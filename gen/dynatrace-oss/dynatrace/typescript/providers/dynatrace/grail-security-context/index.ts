// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/grail_security_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrailSecurityContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * The case-sensitive name of a property of the destination type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/grail_security_context#destination_property GrailSecurityContext#destination_property}
  */
  readonly destinationProperty: string;
  /**
  * Type of the entity whose security context to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/grail_security_context#entity_type GrailSecurityContext#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/grail_security_context#id GrailSecurityContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/grail_security_context#insert_after GrailSecurityContext#insert_after}
  */
  readonly insertAfter?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/grail_security_context dynatrace_grail_security_context}
*/
export class GrailSecurityContext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_grail_security_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrailSecurityContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrailSecurityContext to import
  * @param importFromId The id of the existing GrailSecurityContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/grail_security_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrailSecurityContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_grail_security_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/grail_security_context dynatrace_grail_security_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrailSecurityContextConfig
  */
  public constructor(scope: Construct, id: string, config: GrailSecurityContextConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_grail_security_context',
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
    this._destinationProperty = config.destinationProperty;
    this._entityType = config.entityType;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_property - computed: false, optional: false, required: true
  private _destinationProperty?: string; 
  public get destinationProperty() {
    return this.getStringAttribute('destination_property');
  }
  public set destinationProperty(value: string) {
    this._destinationProperty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPropertyInput() {
    return this._destinationProperty;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_property: cdktf.stringToTerraform(this._destinationProperty),
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_property: {
        value: cdktf.stringToHclTerraform(this._destinationProperty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
