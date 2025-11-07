// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_default_mapping_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6MapTranslationDomainDefaultMappingRuleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_default_mapping_rule#id Cgnv6MapTranslationDomainDefaultMappingRuleA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_default_mapping_rule#name Cgnv6MapTranslationDomainDefaultMappingRuleA#name}
  */
  readonly name: string;
  /**
  * Rule IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_default_mapping_rule#rule_ipv6_prefix Cgnv6MapTranslationDomainDefaultMappingRuleA#rule_ipv6_prefix}
  */
  readonly ruleIpv6Prefix?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_default_mapping_rule#uuid Cgnv6MapTranslationDomainDefaultMappingRuleA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_default_mapping_rule thunder_cgnv6_map_translation_domain_default_mapping_rule}
*/
export class Cgnv6MapTranslationDomainDefaultMappingRuleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_map_translation_domain_default_mapping_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6MapTranslationDomainDefaultMappingRuleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6MapTranslationDomainDefaultMappingRuleA to import
  * @param importFromId The id of the existing Cgnv6MapTranslationDomainDefaultMappingRuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_default_mapping_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6MapTranslationDomainDefaultMappingRuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_map_translation_domain_default_mapping_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_default_mapping_rule thunder_cgnv6_map_translation_domain_default_mapping_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6MapTranslationDomainDefaultMappingRuleAConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6MapTranslationDomainDefaultMappingRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_map_translation_domain_default_mapping_rule',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._ruleIpv6Prefix = config.ruleIpv6Prefix;
    this._uuid = config.uuid;
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

  // rule_ipv6_prefix - computed: false, optional: true, required: false
  private _ruleIpv6Prefix?: string; 
  public get ruleIpv6Prefix() {
    return this.getStringAttribute('rule_ipv6_prefix');
  }
  public set ruleIpv6Prefix(value: string) {
    this._ruleIpv6Prefix = value;
  }
  public resetRuleIpv6Prefix() {
    this._ruleIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIpv6PrefixInput() {
    return this._ruleIpv6Prefix;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rule_ipv6_prefix: cdktf.stringToTerraform(this._ruleIpv6Prefix),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_ipv6_prefix: {
        value: cdktf.stringToHclTerraform(this._ruleIpv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
