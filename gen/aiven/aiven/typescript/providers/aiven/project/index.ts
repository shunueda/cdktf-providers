// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Link a project to an existing account using its account ID. This field is deprecated. Use `parent_id` instead. To set up proper dependencies please refer to this variable as a reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#account_id Project#account_id}
  */
  readonly accountId?: string;
  /**
  * If parent_id is set, grant account owner team admin access to the new project. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#add_account_owners_admin_access Project#add_account_owners_admin_access}
  */
  readonly addAccountOwnersAdminAccess?: boolean | cdktf.IResolvable;
  /**
  * The ID of the billing group this project is assigned to. To set up proper dependencies please refer to this variable as a reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#billing_group Project#billing_group}
  */
  readonly billingGroup?: string;
  /**
  * The name of the project to copy billing information, technical contacts, and some other project attributes from. This is most useful to set up the same billing method when you use bank transfers to pay invoices for other projects. You can only do this when creating a project. You can't set the billing over the API for an existing. To set up proper dependencies please refer to this variable as a reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#copy_from_project Project#copy_from_project}
  */
  readonly copyFromProject?: string;
  /**
  * Default cloud provider and region where services are hosted. This can be changed after the project is created and will not affect existing services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#default_cloud Project#default_cloud}
  */
  readonly defaultCloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Link a project to an [organization or organizational unit](https://aiven.io/docs/platform/concepts/orgs-units-projects) by using its ID. To set up proper dependencies please refer to this variable as a reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#parent_id Project#parent_id}
  */
  readonly parentId?: string;
  /**
  * The name of the project. Names must be globally unique among all Aiven customers and cannot be changed later without destroying and re-creating the project, including all sub-resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#project Project#project}
  */
  readonly project: string;
  /**
  * The email addresses for [project contacts](https://aiven.io/docs/platform/howto/technical-emails), who will receive important alerts and updates about this project and its services. You can also set email contacts at the service level. It's good practice to keep these up-to-date to be aware of any potential issues with your project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#technical_emails Project#technical_emails}
  */
  readonly technicalEmails?: string[];
  /**
  * Use the same billing group that is used in source project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#use_source_project_billing_group Project#use_source_project_billing_group}
  */
  readonly useSourceProjectBillingGroup?: boolean | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#tag Project#tag}
  */
  readonly tag?: ProjectTag[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#timeouts Project#timeouts}
  */
  readonly timeouts?: ProjectTimeouts;
}
export interface ProjectTag {
  /**
  * Project tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#key Project#key}
  */
  readonly key: string;
  /**
  * Project tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#value Project#value}
  */
  readonly value: string;
}

export function projectTagToTerraform(struct?: ProjectTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectTagToHclTerraform(struct?: ProjectTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProjectTagList extends cdktf.ComplexList {
  public internalValue? : ProjectTag[] | cdktf.IResolvable

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
  public get(index: number): ProjectTagOutputReference {
    return new ProjectTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#create Project#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#default Project#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#delete Project#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#read Project#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#update Project#update}
  */
  readonly update?: string;
}

export function projectTimeoutsToTerraform(struct?: ProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function projectTimeoutsToHclTerraform(struct?: ProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project aiven_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/project aiven_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_project',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._addAccountOwnersAdminAccess = config.addAccountOwnersAdminAccess;
    this._billingGroup = config.billingGroup;
    this._copyFromProject = config.copyFromProject;
    this._defaultCloud = config.defaultCloud;
    this._id = config.id;
    this._parentId = config.parentId;
    this._project = config.project;
    this._technicalEmails = config.technicalEmails;
    this._useSourceProjectBillingGroup = config.useSourceProjectBillingGroup;
    this._tag.internalValue = config.tag;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // add_account_owners_admin_access - computed: false, optional: true, required: false
  private _addAccountOwnersAdminAccess?: boolean | cdktf.IResolvable; 
  public get addAccountOwnersAdminAccess() {
    return this.getBooleanAttribute('add_account_owners_admin_access');
  }
  public set addAccountOwnersAdminAccess(value: boolean | cdktf.IResolvable) {
    this._addAccountOwnersAdminAccess = value;
  }
  public resetAddAccountOwnersAdminAccess() {
    this._addAccountOwnersAdminAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAccountOwnersAdminAccessInput() {
    return this._addAccountOwnersAdminAccess;
  }

  // available_credits - computed: true, optional: false, required: false
  public get availableCredits() {
    return this.getStringAttribute('available_credits');
  }

  // billing_group - computed: false, optional: true, required: false
  private _billingGroup?: string; 
  public get billingGroup() {
    return this.getStringAttribute('billing_group');
  }
  public set billingGroup(value: string) {
    this._billingGroup = value;
  }
  public resetBillingGroup() {
    this._billingGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingGroupInput() {
    return this._billingGroup;
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // copy_from_project - computed: false, optional: true, required: false
  private _copyFromProject?: string; 
  public get copyFromProject() {
    return this.getStringAttribute('copy_from_project');
  }
  public set copyFromProject(value: string) {
    this._copyFromProject = value;
  }
  public resetCopyFromProject() {
    this._copyFromProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyFromProjectInput() {
    return this._copyFromProject;
  }

  // default_cloud - computed: false, optional: true, required: false
  private _defaultCloud?: string; 
  public get defaultCloud() {
    return this.getStringAttribute('default_cloud');
  }
  public set defaultCloud(value: string) {
    this._defaultCloud = value;
  }
  public resetDefaultCloud() {
    this._defaultCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCloudInput() {
    return this._defaultCloud;
  }

  // estimated_balance - computed: true, optional: false, required: false
  public get estimatedBalance() {
    return this.getStringAttribute('estimated_balance');
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

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // payment_method - computed: true, optional: false, required: false
  public get paymentMethod() {
    return this.getStringAttribute('payment_method');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // technical_emails - computed: false, optional: true, required: false
  private _technicalEmails?: string[]; 
  public get technicalEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('technical_emails'));
  }
  public set technicalEmails(value: string[]) {
    this._technicalEmails = value;
  }
  public resetTechnicalEmails() {
    this._technicalEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technicalEmailsInput() {
    return this._technicalEmails;
  }

  // use_source_project_billing_group - computed: false, optional: true, required: false
  private _useSourceProjectBillingGroup?: boolean | cdktf.IResolvable; 
  public get useSourceProjectBillingGroup() {
    return this.getBooleanAttribute('use_source_project_billing_group');
  }
  public set useSourceProjectBillingGroup(value: boolean | cdktf.IResolvable) {
    this._useSourceProjectBillingGroup = value;
  }
  public resetUseSourceProjectBillingGroup() {
    this._useSourceProjectBillingGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceProjectBillingGroupInput() {
    return this._useSourceProjectBillingGroup;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ProjectTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ProjectTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ProjectTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      add_account_owners_admin_access: cdktf.booleanToTerraform(this._addAccountOwnersAdminAccess),
      billing_group: cdktf.stringToTerraform(this._billingGroup),
      copy_from_project: cdktf.stringToTerraform(this._copyFromProject),
      default_cloud: cdktf.stringToTerraform(this._defaultCloud),
      id: cdktf.stringToTerraform(this._id),
      parent_id: cdktf.stringToTerraform(this._parentId),
      project: cdktf.stringToTerraform(this._project),
      technical_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._technicalEmails),
      use_source_project_billing_group: cdktf.booleanToTerraform(this._useSourceProjectBillingGroup),
      tag: cdktf.listMapper(projectTagToTerraform, true)(this._tag.internalValue),
      timeouts: projectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_account_owners_admin_access: {
        value: cdktf.booleanToHclTerraform(this._addAccountOwnersAdminAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing_group: {
        value: cdktf.stringToHclTerraform(this._billingGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_from_project: {
        value: cdktf.stringToHclTerraform(this._copyFromProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_cloud: {
        value: cdktf.stringToHclTerraform(this._defaultCloud),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      technical_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._technicalEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_source_project_billing_group: {
        value: cdktf.booleanToHclTerraform(this._useSourceProjectBillingGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag: {
        value: cdktf.listMapperHcl(projectTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectTagList",
      },
      timeouts: {
        value: projectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
