// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryConsentDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A version-independent unique identifier for this Consent Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition#unique_id DataPingdirectoryConsentDefinition#unique_id}
  */
  readonly uniqueId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition pingdirectory_consent_definition}
*/
export class DataPingdirectoryConsentDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_consent_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryConsentDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryConsentDefinition to import
  * @param importFromId The id of the existing DataPingdirectoryConsentDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryConsentDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_consent_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition pingdirectory_consent_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryConsentDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryConsentDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_consent_definition',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._uniqueId = config.uniqueId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parameter - computed: true, optional: false, required: false
  public get parameter() {
    return cdktf.Fn.tolist(this.getListAttribute('parameter'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_id - computed: false, optional: false, required: true
  private _uniqueId?: string; 
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }
  public set uniqueId(value: string) {
    this._uniqueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdInput() {
    return this._uniqueId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      unique_id: cdktf.stringToTerraform(this._uniqueId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      unique_id: {
        value: cdktf.stringToHclTerraform(this._uniqueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
