// https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/groupclassification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeyhubGroupclassificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/groupclassification#additional DataKeyhubGroupclassification#additional}
  */
  readonly additional?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/groupclassification#uuid DataKeyhubGroupclassification#uuid}
  */
  readonly uuid: string;
}
export interface DataKeyhubGroupclassificationAudit {
}

export function dataKeyhubGroupclassificationAuditToTerraform(struct?: DataKeyhubGroupclassificationAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupclassificationAuditToHclTerraform(struct?: DataKeyhubGroupclassificationAudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupclassificationAuditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupclassificationAudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupclassificationAudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }
}
export interface DataKeyhubGroupclassificationInfo {
}

export function dataKeyhubGroupclassificationInfoToTerraform(struct?: DataKeyhubGroupclassificationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupclassificationInfoToHclTerraform(struct?: DataKeyhubGroupclassificationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupclassificationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyhubGroupclassificationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupclassificationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nr_groups - computed: true, optional: false, required: false
  public get nrGroups() {
    return this.getNumberAttribute('nr_groups');
  }
}
export interface DataKeyhubGroupclassificationLinks {
}

export function dataKeyhubGroupclassificationLinksToTerraform(struct?: DataKeyhubGroupclassificationLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupclassificationLinksToHclTerraform(struct?: DataKeyhubGroupclassificationLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupclassificationLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupclassificationLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupclassificationLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupclassificationLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupclassificationLinksOutputReference {
    return new DataKeyhubGroupclassificationLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeyhubGroupclassificationPermissions {
}

export function dataKeyhubGroupclassificationPermissionsToTerraform(struct?: DataKeyhubGroupclassificationPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyhubGroupclassificationPermissionsToHclTerraform(struct?: DataKeyhubGroupclassificationPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyhubGroupclassificationPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeyhubGroupclassificationPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyhubGroupclassificationPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full - computed: true, optional: false, required: false
  public get full() {
    return this.getStringAttribute('full');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }

  // type_escaped - computed: true, optional: false, required: false
  public get typeEscaped() {
    return this.getStringAttribute('type_escaped');
  }
}

export class DataKeyhubGroupclassificationPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataKeyhubGroupclassificationPermissionsOutputReference {
    return new DataKeyhubGroupclassificationPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/groupclassification keyhub_groupclassification}
*/
export class DataKeyhubGroupclassification extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyhub_groupclassification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyhubGroupclassification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyhubGroupclassification to import
  * @param importFromId The id of the existing DataKeyhubGroupclassification that should be imported. Refer to the {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/groupclassification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyhubGroupclassification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyhub_groupclassification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/topicuskeyhub/keyhub/2.44.0/docs/data-sources/groupclassification keyhub_groupclassification} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyhubGroupclassificationConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyhubGroupclassificationConfig) {
    super(scope, id, {
      terraformResourceType: 'keyhub_groupclassification',
      terraformGeneratorMetadata: {
        providerName: 'keyhub',
        providerVersion: '2.44.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additional = config.additional;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional - computed: false, optional: true, required: false
  private _additional?: string[]; 
  public get additional() {
    return this.getListAttribute('additional');
  }
  public set additional(value: string[]) {
    this._additional = value;
  }
  public resetAdditional() {
    this._additional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInput() {
    return this._additional;
  }

  // audit - computed: true, optional: false, required: false
  private _audit = new DataKeyhubGroupclassificationAuditOutputReference(this, "audit");
  public get audit() {
    return this._audit;
  }

  // authorizing_group_auditing_required - computed: true, optional: false, required: false
  public get authorizingGroupAuditingRequired() {
    return this.getBooleanAttribute('authorizing_group_auditing_required');
  }

  // authorizing_group_delegation_required - computed: true, optional: false, required: false
  public get authorizingGroupDelegationRequired() {
    return this.getBooleanAttribute('authorizing_group_delegation_required');
  }

  // authorizing_group_membership_required - computed: true, optional: false, required: false
  public get authorizingGroupMembershipRequired() {
    return this.getBooleanAttribute('authorizing_group_membership_required');
  }

  // authorizing_group_provisioning_required - computed: true, optional: false, required: false
  public get authorizingGroupProvisioningRequired() {
    return this.getBooleanAttribute('authorizing_group_provisioning_required');
  }

  // default_classification - computed: true, optional: false, required: false
  public get defaultClassification() {
    return this.getBooleanAttribute('default_classification');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataKeyhubGroupclassificationInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataKeyhubGroupclassificationLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // maximum_audit_interval - computed: true, optional: false, required: false
  public get maximumAuditInterval() {
    return this.getNumberAttribute('maximum_audit_interval');
  }

  // minimum_nr_managers - computed: true, optional: false, required: false
  public get minimumNrManagers() {
    return this.getNumberAttribute('minimum_nr_managers');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataKeyhubGroupclassificationPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // record_trail_required - computed: true, optional: false, required: false
  public get recordTrailRequired() {
    return this.getBooleanAttribute('record_trail_required');
  }

  // required_months - computed: true, optional: false, required: false
  public get requiredMonths() {
    return cdktf.Fn.tolist(this.getListAttribute('required_months'));
  }

  // rotating_password_required - computed: true, optional: false, required: false
  public get rotatingPasswordRequired() {
    return this.getBooleanAttribute('rotating_password_required');
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vault_requires_activation - computed: true, optional: false, required: false
  public get vaultRequiresActivation() {
    return this.getBooleanAttribute('vault_requires_activation');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additional),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additional),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
