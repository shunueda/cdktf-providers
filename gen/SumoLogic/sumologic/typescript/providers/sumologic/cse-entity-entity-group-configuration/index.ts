// https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseEntityEntityGroupConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#criticality CseEntityEntityGroupConfiguration#criticality}
  */
  readonly criticality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#description CseEntityEntityGroupConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#entity_namespace CseEntityEntityGroupConfiguration#entity_namespace}
  */
  readonly entityNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#entity_type CseEntityEntityGroupConfiguration#entity_type}
  */
  readonly entityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#id CseEntityEntityGroupConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#name CseEntityEntityGroupConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#network_block CseEntityEntityGroupConfiguration#network_block}
  */
  readonly networkBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#prefix CseEntityEntityGroupConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#suffix CseEntityEntityGroupConfiguration#suffix}
  */
  readonly suffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#suppressed CseEntityEntityGroupConfiguration#suppressed}
  */
  readonly suppressed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#tags CseEntityEntityGroupConfiguration#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration sumologic_cse_entity_entity_group_configuration}
*/
export class CseEntityEntityGroupConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_entity_entity_group_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseEntityEntityGroupConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseEntityEntityGroupConfiguration to import
  * @param importFromId The id of the existing CseEntityEntityGroupConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseEntityEntityGroupConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_entity_entity_group_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/cse_entity_entity_group_configuration sumologic_cse_entity_entity_group_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseEntityEntityGroupConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CseEntityEntityGroupConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_entity_entity_group_configuration',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.1',
        providerVersionConstraint: '3.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._criticality = config.criticality;
    this._description = config.description;
    this._entityNamespace = config.entityNamespace;
    this._entityType = config.entityType;
    this._id = config.id;
    this._name = config.name;
    this._networkBlock = config.networkBlock;
    this._prefix = config.prefix;
    this._suffix = config.suffix;
    this._suppressed = config.suppressed;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // criticality - computed: false, optional: true, required: false
  private _criticality?: string; 
  public get criticality() {
    return this.getStringAttribute('criticality');
  }
  public set criticality(value: string) {
    this._criticality = value;
  }
  public resetCriticality() {
    this._criticality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // entity_namespace - computed: false, optional: true, required: false
  private _entityNamespace?: string; 
  public get entityNamespace() {
    return this.getStringAttribute('entity_namespace');
  }
  public set entityNamespace(value: string) {
    this._entityNamespace = value;
  }
  public resetEntityNamespace() {
    this._entityNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNamespaceInput() {
    return this._entityNamespace;
  }

  // entity_type - computed: false, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_block - computed: false, optional: true, required: false
  private _networkBlock?: string; 
  public get networkBlock() {
    return this.getStringAttribute('network_block');
  }
  public set networkBlock(value: string) {
    this._networkBlock = value;
  }
  public resetNetworkBlock() {
    this._networkBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBlockInput() {
    return this._networkBlock;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // suppressed - computed: false, optional: true, required: false
  private _suppressed?: boolean | cdktf.IResolvable; 
  public get suppressed() {
    return this.getBooleanAttribute('suppressed');
  }
  public set suppressed(value: boolean | cdktf.IResolvable) {
    this._suppressed = value;
  }
  public resetSuppressed() {
    this._suppressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedInput() {
    return this._suppressed;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      criticality: cdktf.stringToTerraform(this._criticality),
      description: cdktf.stringToTerraform(this._description),
      entity_namespace: cdktf.stringToTerraform(this._entityNamespace),
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_block: cdktf.stringToTerraform(this._networkBlock),
      prefix: cdktf.stringToTerraform(this._prefix),
      suffix: cdktf.stringToTerraform(this._suffix),
      suppressed: cdktf.booleanToTerraform(this._suppressed),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      criticality: {
        value: cdktf.stringToHclTerraform(this._criticality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_namespace: {
        value: cdktf.stringToHclTerraform(this._entityNamespace),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_block: {
        value: cdktf.stringToHclTerraform(this._networkBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suffix: {
        value: cdktf.stringToHclTerraform(this._suffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppressed: {
        value: cdktf.booleanToHclTerraform(this._suppressed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
