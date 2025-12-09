// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateFilterEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#arp_flag SchemaTemplateFilterEntry#arp_flag}
  */
  readonly arpFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#destination_from SchemaTemplateFilterEntry#destination_from}
  */
  readonly destinationFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#destination_to SchemaTemplateFilterEntry#destination_to}
  */
  readonly destinationTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#display_name SchemaTemplateFilterEntry#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#entry_description SchemaTemplateFilterEntry#entry_description}
  */
  readonly entryDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#entry_display_name SchemaTemplateFilterEntry#entry_display_name}
  */
  readonly entryDisplayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#entry_name SchemaTemplateFilterEntry#entry_name}
  */
  readonly entryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#ether_type SchemaTemplateFilterEntry#ether_type}
  */
  readonly etherType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#id SchemaTemplateFilterEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#ip_protocol SchemaTemplateFilterEntry#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#match_only_fragments SchemaTemplateFilterEntry#match_only_fragments}
  */
  readonly matchOnlyFragments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#name SchemaTemplateFilterEntry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#schema_id SchemaTemplateFilterEntry#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#source_from SchemaTemplateFilterEntry#source_from}
  */
  readonly sourceFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#source_to SchemaTemplateFilterEntry#source_to}
  */
  readonly sourceTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#stateful SchemaTemplateFilterEntry#stateful}
  */
  readonly stateful?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#tcp_session_rules SchemaTemplateFilterEntry#tcp_session_rules}
  */
  readonly tcpSessionRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#template_name SchemaTemplateFilterEntry#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry mso_schema_template_filter_entry}
*/
export class SchemaTemplateFilterEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_filter_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateFilterEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateFilterEntry to import
  * @param importFromId The id of the existing SchemaTemplateFilterEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateFilterEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_filter_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_filter_entry mso_schema_template_filter_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateFilterEntryConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateFilterEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_filter_entry',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arpFlag = config.arpFlag;
    this._destinationFrom = config.destinationFrom;
    this._destinationTo = config.destinationTo;
    this._displayName = config.displayName;
    this._entryDescription = config.entryDescription;
    this._entryDisplayName = config.entryDisplayName;
    this._entryName = config.entryName;
    this._etherType = config.etherType;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._matchOnlyFragments = config.matchOnlyFragments;
    this._name = config.name;
    this._schemaId = config.schemaId;
    this._sourceFrom = config.sourceFrom;
    this._sourceTo = config.sourceTo;
    this._stateful = config.stateful;
    this._tcpSessionRules = config.tcpSessionRules;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_flag - computed: true, optional: true, required: false
  private _arpFlag?: string; 
  public get arpFlag() {
    return this.getStringAttribute('arp_flag');
  }
  public set arpFlag(value: string) {
    this._arpFlag = value;
  }
  public resetArpFlag() {
    this._arpFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpFlagInput() {
    return this._arpFlag;
  }

  // destination_from - computed: true, optional: true, required: false
  private _destinationFrom?: string; 
  public get destinationFrom() {
    return this.getStringAttribute('destination_from');
  }
  public set destinationFrom(value: string) {
    this._destinationFrom = value;
  }
  public resetDestinationFrom() {
    this._destinationFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFromInput() {
    return this._destinationFrom;
  }

  // destination_to - computed: true, optional: true, required: false
  private _destinationTo?: string; 
  public get destinationTo() {
    return this.getStringAttribute('destination_to');
  }
  public set destinationTo(value: string) {
    this._destinationTo = value;
  }
  public resetDestinationTo() {
    this._destinationTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationToInput() {
    return this._destinationTo;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // entry_description - computed: true, optional: true, required: false
  private _entryDescription?: string; 
  public get entryDescription() {
    return this.getStringAttribute('entry_description');
  }
  public set entryDescription(value: string) {
    this._entryDescription = value;
  }
  public resetEntryDescription() {
    this._entryDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDescriptionInput() {
    return this._entryDescription;
  }

  // entry_display_name - computed: false, optional: false, required: true
  private _entryDisplayName?: string; 
  public get entryDisplayName() {
    return this.getStringAttribute('entry_display_name');
  }
  public set entryDisplayName(value: string) {
    this._entryDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDisplayNameInput() {
    return this._entryDisplayName;
  }

  // entry_name - computed: false, optional: false, required: true
  private _entryName?: string; 
  public get entryName() {
    return this.getStringAttribute('entry_name');
  }
  public set entryName(value: string) {
    this._entryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryNameInput() {
    return this._entryName;
  }

  // ether_type - computed: true, optional: true, required: false
  private _etherType?: string; 
  public get etherType() {
    return this.getStringAttribute('ether_type');
  }
  public set etherType(value: string) {
    this._etherType = value;
  }
  public resetEtherType() {
    this._etherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypeInput() {
    return this._etherType;
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

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // match_only_fragments - computed: true, optional: true, required: false
  private _matchOnlyFragments?: boolean | cdktf.IResolvable; 
  public get matchOnlyFragments() {
    return this.getBooleanAttribute('match_only_fragments');
  }
  public set matchOnlyFragments(value: boolean | cdktf.IResolvable) {
    this._matchOnlyFragments = value;
  }
  public resetMatchOnlyFragments() {
    this._matchOnlyFragments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOnlyFragmentsInput() {
    return this._matchOnlyFragments;
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

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // source_from - computed: true, optional: true, required: false
  private _sourceFrom?: string; 
  public get sourceFrom() {
    return this.getStringAttribute('source_from');
  }
  public set sourceFrom(value: string) {
    this._sourceFrom = value;
  }
  public resetSourceFrom() {
    this._sourceFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFromInput() {
    return this._sourceFrom;
  }

  // source_to - computed: true, optional: true, required: false
  private _sourceTo?: string; 
  public get sourceTo() {
    return this.getStringAttribute('source_to');
  }
  public set sourceTo(value: string) {
    this._sourceTo = value;
  }
  public resetSourceTo() {
    this._sourceTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceToInput() {
    return this._sourceTo;
  }

  // stateful - computed: true, optional: true, required: false
  private _stateful?: boolean | cdktf.IResolvable; 
  public get stateful() {
    return this.getBooleanAttribute('stateful');
  }
  public set stateful(value: boolean | cdktf.IResolvable) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
  }

  // tcp_session_rules - computed: true, optional: true, required: false
  private _tcpSessionRules?: string[]; 
  public get tcpSessionRules() {
    return this.getListAttribute('tcp_session_rules');
  }
  public set tcpSessionRules(value: string[]) {
    this._tcpSessionRules = value;
  }
  public resetTcpSessionRules() {
    this._tcpSessionRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionRulesInput() {
    return this._tcpSessionRules;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_flag: cdktf.stringToTerraform(this._arpFlag),
      destination_from: cdktf.stringToTerraform(this._destinationFrom),
      destination_to: cdktf.stringToTerraform(this._destinationTo),
      display_name: cdktf.stringToTerraform(this._displayName),
      entry_description: cdktf.stringToTerraform(this._entryDescription),
      entry_display_name: cdktf.stringToTerraform(this._entryDisplayName),
      entry_name: cdktf.stringToTerraform(this._entryName),
      ether_type: cdktf.stringToTerraform(this._etherType),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      match_only_fragments: cdktf.booleanToTerraform(this._matchOnlyFragments),
      name: cdktf.stringToTerraform(this._name),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      source_from: cdktf.stringToTerraform(this._sourceFrom),
      source_to: cdktf.stringToTerraform(this._sourceTo),
      stateful: cdktf.booleanToTerraform(this._stateful),
      tcp_session_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tcpSessionRules),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_flag: {
        value: cdktf.stringToHclTerraform(this._arpFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_from: {
        value: cdktf.stringToHclTerraform(this._destinationFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_to: {
        value: cdktf.stringToHclTerraform(this._destinationTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_description: {
        value: cdktf.stringToHclTerraform(this._entryDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_display_name: {
        value: cdktf.stringToHclTerraform(this._entryDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_name: {
        value: cdktf.stringToHclTerraform(this._entryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ether_type: {
        value: cdktf.stringToHclTerraform(this._etherType),
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
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_only_fragments: {
        value: cdktf.booleanToHclTerraform(this._matchOnlyFragments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_from: {
        value: cdktf.stringToHclTerraform(this._sourceFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_to: {
        value: cdktf.stringToHclTerraform(this._sourceTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stateful: {
        value: cdktf.booleanToHclTerraform(this._stateful),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_session_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tcpSessionRules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
