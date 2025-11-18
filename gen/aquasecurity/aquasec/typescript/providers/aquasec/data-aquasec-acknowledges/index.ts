// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/acknowledges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecAcknowledgesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/acknowledges#id DataAquasecAcknowledges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAquasecAcknowledgesAcknowledges {
}

export function dataAquasecAcknowledgesAcknowledgesToTerraform(struct?: DataAquasecAcknowledgesAcknowledges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecAcknowledgesAcknowledgesToHclTerraform(struct?: DataAquasecAcknowledgesAcknowledges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecAcknowledgesAcknowledgesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecAcknowledgesAcknowledges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecAcknowledgesAcknowledges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ack_repo_id - computed: true, optional: false, required: false
  public get ackRepoId() {
    return this.getNumberAttribute('ack_repo_id');
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // docker_id - computed: true, optional: false, required: false
  public get dockerId() {
    return this.getStringAttribute('docker_id');
  }

  // expiration_configured_at - computed: true, optional: false, required: false
  public get expirationConfiguredAt() {
    return this.getStringAttribute('expiration_configured_at');
  }

  // expiration_configured_by - computed: true, optional: false, required: false
  public get expirationConfiguredBy() {
    return this.getStringAttribute('expiration_configured_by');
  }

  // expiration_days - computed: true, optional: false, required: false
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }

  // fix_version - computed: true, optional: false, required: false
  public get fixVersion() {
    return this.getStringAttribute('fix_version');
  }

  // has_custom_severity - computed: true, optional: false, required: false
  public get hasCustomSeverity() {
    return this.getBooleanAttribute('has_custom_severity');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // issue_name - computed: true, optional: false, required: false
  public get issueName() {
    return this.getStringAttribute('issue_name');
  }

  // issue_type - computed: true, optional: false, required: false
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // registry_name - computed: true, optional: false, required: false
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // repository_name - computed: true, optional: false, required: false
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }

  // resource_cpe - computed: true, optional: false, required: false
  public get resourceCpe() {
    return this.getStringAttribute('resource_cpe');
  }

  // resource_format - computed: true, optional: false, required: false
  public get resourceFormat() {
    return this.getStringAttribute('resource_format');
  }

  // resource_hash - computed: true, optional: false, required: false
  public get resourceHash() {
    return this.getStringAttribute('resource_hash');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_path - computed: true, optional: false, required: false
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // suppression_rule_id - computed: true, optional: false, required: false
  public get suppressionRuleId() {
    return this.getNumberAttribute('suppression_rule_id');
  }

  // suppression_rule_name - computed: true, optional: false, required: false
  public get suppressionRuleName() {
    return this.getStringAttribute('suppression_rule_name');
  }

  // suppression_rule_scopes - computed: true, optional: false, required: false
  public get suppressionRuleScopes() {
    return this.getListAttribute('suppression_rule_scopes');
  }
}

export class DataAquasecAcknowledgesAcknowledgesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecAcknowledgesAcknowledgesOutputReference {
    return new DataAquasecAcknowledgesAcknowledgesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/acknowledges aquasec_acknowledges}
*/
export class DataAquasecAcknowledges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_acknowledges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecAcknowledges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecAcknowledges to import
  * @param importFromId The id of the existing DataAquasecAcknowledges that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/acknowledges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecAcknowledges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_acknowledges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/acknowledges aquasec_acknowledges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecAcknowledgesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAquasecAcknowledgesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aquasec_acknowledges',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acknowledges - computed: true, optional: false, required: false
  private _acknowledges = new DataAquasecAcknowledgesAcknowledgesList(this, "acknowledges", false);
  public get acknowledges() {
    return this._acknowledges;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
