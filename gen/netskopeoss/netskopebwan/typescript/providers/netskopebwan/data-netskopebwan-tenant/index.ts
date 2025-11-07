// https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopebwanTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#ancestor_tenants DataNetskopebwanTenant#ancestor_tenants}
  */
  readonly ancestorTenants?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#date_created DataNetskopebwanTenant#date_created}
  */
  readonly dateCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#date_modified DataNetskopebwanTenant#date_modified}
  */
  readonly dateModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#description DataNetskopebwanTenant#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#domain_names DataNetskopebwanTenant#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#id DataNetskopebwanTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#is_disabled DataNetskopebwanTenant#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#name DataNetskopebwanTenant#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#parent_id DataNetskopebwanTenant#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#rest_api_end_point DataNetskopebwanTenant#rest_api_end_point}
  */
  readonly restApiEndPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#tenant_type DataNetskopebwanTenant#tenant_type}
  */
  readonly tenantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#tenant_type_input DataNetskopebwanTenant#tenant_type_input}
  */
  readonly tenantTypeInput?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#created_by DataNetskopebwanTenant#created_by}
  */
  readonly createdBy?: DataNetskopebwanTenantCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#modified_by DataNetskopebwanTenant#modified_by}
  */
  readonly modifiedBy?: DataNetskopebwanTenantModifiedBy;
}
export interface DataNetskopebwanTenantCreatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#email DataNetskopebwanTenant#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#id DataNetskopebwanTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#name DataNetskopebwanTenant#name}
  */
  readonly name?: string;
}

export function dataNetskopebwanTenantCreatedByToTerraform(struct?: DataNetskopebwanTenantCreatedByOutputReference | DataNetskopebwanTenantCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetskopebwanTenantCreatedByToHclTerraform(struct?: DataNetskopebwanTenantCreatedByOutputReference | DataNetskopebwanTenantCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanTenantCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNetskopebwanTenantCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanTenantCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataNetskopebwanTenantModifiedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#email DataNetskopebwanTenant#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#id DataNetskopebwanTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#name DataNetskopebwanTenant#name}
  */
  readonly name?: string;
}

export function dataNetskopebwanTenantModifiedByToTerraform(struct?: DataNetskopebwanTenantModifiedByOutputReference | DataNetskopebwanTenantModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetskopebwanTenantModifiedByToHclTerraform(struct?: DataNetskopebwanTenantModifiedByOutputReference | DataNetskopebwanTenantModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetskopebwanTenantModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNetskopebwanTenantModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopebwanTenantModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant netskopebwan_tenant}
*/
export class DataNetskopebwanTenant extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskopebwan_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopebwanTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopebwanTenant to import
  * @param importFromId The id of the existing DataNetskopebwanTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopebwanTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskopebwan_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/data-sources/tenant netskopebwan_tenant} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopebwanTenantConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetskopebwanTenantConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskopebwan_tenant',
      terraformGeneratorMetadata: {
        providerName: 'netskopebwan',
        providerVersion: '0.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ancestorTenants = config.ancestorTenants;
    this._dateCreated = config.dateCreated;
    this._dateModified = config.dateModified;
    this._description = config.description;
    this._domainNames = config.domainNames;
    this._id = config.id;
    this._isDisabled = config.isDisabled;
    this._name = config.name;
    this._parentId = config.parentId;
    this._restApiEndPoint = config.restApiEndPoint;
    this._tenantType = config.tenantType;
    this._tenantTypeInput = config.tenantTypeInput;
    this._createdBy.internalValue = config.createdBy;
    this._modifiedBy.internalValue = config.modifiedBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ancestor_tenants - computed: true, optional: true, required: false
  private _ancestorTenants?: string[]; 
  public get ancestorTenants() {
    return this.getListAttribute('ancestor_tenants');
  }
  public set ancestorTenants(value: string[]) {
    this._ancestorTenants = value;
  }
  public resetAncestorTenants() {
    this._ancestorTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorTenantsInput() {
    return this._ancestorTenants;
  }

  // date_created - computed: true, optional: true, required: false
  private _dateCreated?: string; 
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }
  public set dateCreated(value: string) {
    this._dateCreated = value;
  }
  public resetDateCreated() {
    this._dateCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateCreatedInput() {
    return this._dateCreated;
  }

  // date_modified - computed: true, optional: true, required: false
  private _dateModified?: string; 
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }
  public set dateModified(value: string) {
    this._dateModified = value;
  }
  public resetDateModified() {
    this._dateModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateModifiedInput() {
    return this._dateModified;
  }

  // description - computed: true, optional: true, required: false
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

  // domain_names - computed: true, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
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

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_id - computed: true, optional: true, required: false
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

  // rest_api_end_point - computed: true, optional: true, required: false
  private _restApiEndPoint?: string; 
  public get restApiEndPoint() {
    return this.getStringAttribute('rest_api_end_point');
  }
  public set restApiEndPoint(value: string) {
    this._restApiEndPoint = value;
  }
  public resetRestApiEndPoint() {
    this._restApiEndPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiEndPointInput() {
    return this._restApiEndPoint;
  }

  // tenant_type - computed: true, optional: true, required: false
  private _tenantType?: string; 
  public get tenantType() {
    return this.getStringAttribute('tenant_type');
  }
  public set tenantType(value: string) {
    this._tenantType = value;
  }
  public resetTenantType() {
    this._tenantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTypeTfInput() {
    return this._tenantType;
  }

  // tenant_type_input - computed: true, optional: true, required: false
  private _tenantTypeInput?: string; 
  public get tenantTypeInput() {
    return this.getStringAttribute('tenant_type_input');
  }
  public set tenantTypeInput(value: string) {
    this._tenantTypeInput = value;
  }
  public resetTenantTypeInput() {
    this._tenantTypeInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTypeInputInput() {
    return this._tenantTypeInput;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy = new DataNetskopebwanTenantCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: DataNetskopebwanTenantCreatedBy) {
    this._createdBy.internalValue = value;
  }
  public resetCreatedBy() {
    this._createdBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy.internalValue;
  }

  // modified_by - computed: false, optional: true, required: false
  private _modifiedBy = new DataNetskopebwanTenantModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: DataNetskopebwanTenantModifiedBy) {
    this._modifiedBy.internalValue = value;
  }
  public resetModifiedBy() {
    this._modifiedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ancestor_tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ancestorTenants),
      date_created: cdktf.stringToTerraform(this._dateCreated),
      date_modified: cdktf.stringToTerraform(this._dateModified),
      description: cdktf.stringToTerraform(this._description),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      id: cdktf.stringToTerraform(this._id),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      rest_api_end_point: cdktf.stringToTerraform(this._restApiEndPoint),
      tenant_type: cdktf.stringToTerraform(this._tenantType),
      tenant_type_input: cdktf.stringToTerraform(this._tenantTypeInput),
      created_by: dataNetskopebwanTenantCreatedByToTerraform(this._createdBy.internalValue),
      modified_by: dataNetskopebwanTenantModifiedByToTerraform(this._modifiedBy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ancestor_tenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ancestorTenants),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      date_created: {
        value: cdktf.stringToHclTerraform(this._dateCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_modified: {
        value: cdktf.stringToHclTerraform(this._dateModified),
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
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_api_end_point: {
        value: cdktf.stringToHclTerraform(this._restApiEndPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_type: {
        value: cdktf.stringToHclTerraform(this._tenantType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_type_input: {
        value: cdktf.stringToHclTerraform(this._tenantTypeInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: dataNetskopebwanTenantCreatedByToHclTerraform(this._createdBy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNetskopebwanTenantCreatedByList",
      },
      modified_by: {
        value: dataNetskopebwanTenantModifiedByToHclTerraform(this._modifiedBy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNetskopebwanTenantModifiedByList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
