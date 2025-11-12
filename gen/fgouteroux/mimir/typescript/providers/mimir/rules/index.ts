// https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * YAML content containing rule groups. Mutually exclusive with 'content_file'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules#content Rules#content}
  */
  readonly content?: string;
  /**
  * Path to YAML file containing rule groups. Mutually exclusive with 'content'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules#content_file Rules#content_file}
  */
  readonly contentFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules#id Rules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of rule group names to ignore from the content. Useful when you want to manage most groups but exclude specific ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules#ignore_groups Rules#ignore_groups}
  */
  readonly ignoreGroups?: string[];
  /**
  * The namespace for the rule groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules#namespace Rules#namespace}
  */
  readonly namespace: string;
  /**
  * Explicit list of rule group names to manage. If not specified, all groups in the content will be managed. Use this to manage only specific groups from a larger YAML file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules#only_groups Rules#only_groups}
  */
  readonly onlyGroups?: string[];
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules#org_id Rules#org_id}
  */
  readonly orgId?: string;
}
export interface RulesGroups {
}

export function rulesGroupsToTerraform(struct?: RulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rulesGroupsToHclTerraform(struct?: RulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RulesGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alerting_rules_count - computed: true, optional: false, required: false
  public get alertingRulesCount() {
    return this.getNumberAttribute('alerting_rules_count');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recording_rules_count - computed: true, optional: false, required: false
  public get recordingRulesCount() {
    return this.getNumberAttribute('recording_rules_count');
  }

  // rules_count - computed: true, optional: false, required: false
  public get rulesCount() {
    return this.getNumberAttribute('rules_count');
  }
}

export class RulesGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RulesGroupsOutputReference {
    return new RulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules mimir_rules}
*/
export class Rules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mimir_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rules to import
  * @param importFromId The id of the existing Rules that should be imported. Refer to the {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mimir_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/resources/rules mimir_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulesConfig
  */
  public constructor(scope: Construct, id: string, config: RulesConfig) {
    super(scope, id, {
      terraformResourceType: 'mimir_rules',
      terraformGeneratorMetadata: {
        providerName: 'mimir',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._contentFile = config.contentFile;
    this._id = config.id;
    this._ignoreGroups = config.ignoreGroups;
    this._namespace = config.namespace;
    this._onlyGroups = config.onlyGroups;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_file - computed: false, optional: true, required: false
  private _contentFile?: string; 
  public get contentFile() {
    return this.getStringAttribute('content_file');
  }
  public set contentFile(value: string) {
    this._contentFile = value;
  }
  public resetContentFile() {
    this._contentFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFileInput() {
    return this._contentFile;
  }

  // content_hash - computed: true, optional: false, required: false
  public get contentHash() {
    return this.getStringAttribute('content_hash');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new RulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // groups_count - computed: true, optional: false, required: false
  public get groupsCount() {
    return this.getNumberAttribute('groups_count');
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

  // ignore_groups - computed: false, optional: true, required: false
  private _ignoreGroups?: string[]; 
  public get ignoreGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('ignore_groups'));
  }
  public set ignoreGroups(value: string[]) {
    this._ignoreGroups = value;
  }
  public resetIgnoreGroups() {
    this._ignoreGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGroupsInput() {
    return this._ignoreGroups;
  }

  // managed_groups - computed: true, optional: false, required: false
  public get managedGroups() {
    return this.getListAttribute('managed_groups');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // only_groups - computed: false, optional: true, required: false
  private _onlyGroups?: string[]; 
  public get onlyGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('only_groups'));
  }
  public set onlyGroups(value: string[]) {
    this._onlyGroups = value;
  }
  public resetOnlyGroups() {
    this._onlyGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyGroupsInput() {
    return this._onlyGroups;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // rule_names - computed: true, optional: false, required: false
  public get ruleNames() {
    return this.getListAttribute('rule_names');
  }

  // total_rules - computed: true, optional: false, required: false
  public get totalRules() {
    return this.getNumberAttribute('total_rules');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      content_file: cdktf.stringToTerraform(this._contentFile),
      id: cdktf.stringToTerraform(this._id),
      ignore_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreGroups),
      namespace: cdktf.stringToTerraform(this._namespace),
      only_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onlyGroups),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_file: {
        value: cdktf.stringToHclTerraform(this._contentFile),
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
      ignore_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      only_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onlyGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
