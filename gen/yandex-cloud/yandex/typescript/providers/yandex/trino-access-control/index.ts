// https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrinoAccessControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Catalog session property access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#catalog_session_properties TrinoAccessControl#catalog_session_properties}
  */
  readonly catalogSessionProperties?: TrinoAccessControlCatalogSessionProperties[] | cdktf.IResolvable;
  /**
  * Catalog level access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#catalogs TrinoAccessControl#catalogs}
  */
  readonly catalogs?: TrinoAccessControlCatalogs[] | cdktf.IResolvable;
  /**
  * ID of the Trino cluster. Provided by the client when the Access Control is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#cluster_id TrinoAccessControl#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Function level access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#functions TrinoAccessControl#functions}
  */
  readonly functions?: TrinoAccessControlFunctions[] | cdktf.IResolvable;
  /**
  * Procedure level access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#procedures TrinoAccessControl#procedures}
  */
  readonly procedures?: TrinoAccessControlProcedures[] | cdktf.IResolvable;
  /**
  * Query level access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#queries TrinoAccessControl#queries}
  */
  readonly queries?: TrinoAccessControlQueries[] | cdktf.IResolvable;
  /**
  * Schema level access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#schemas TrinoAccessControl#schemas}
  */
  readonly schemas?: TrinoAccessControlSchemas[] | cdktf.IResolvable;
  /**
  * System session property access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#system_session_properties TrinoAccessControl#system_session_properties}
  */
  readonly systemSessionProperties?: TrinoAccessControlSystemSessionProperties[] | cdktf.IResolvable;
  /**
  * Table level access control rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#tables TrinoAccessControl#tables}
  */
  readonly tables?: TrinoAccessControlTables[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#timeouts TrinoAccessControl#timeouts}
  */
  readonly timeouts?: TrinoAccessControlTimeouts;
}
export interface TrinoAccessControlCatalogSessionPropertiesCatalog {
  /**
  * Catalog IDs rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#ids TrinoAccessControl#ids}
  */
  readonly ids?: string[];
  /**
  * Catalog name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
}

export function trinoAccessControlCatalogSessionPropertiesCatalogToTerraform(struct?: TrinoAccessControlCatalogSessionPropertiesCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
  }
}


export function trinoAccessControlCatalogSessionPropertiesCatalogToHclTerraform(struct?: TrinoAccessControlCatalogSessionPropertiesCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlCatalogSessionPropertiesCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlCatalogSessionPropertiesCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlCatalogSessionPropertiesCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids = undefined;
      this._nameRegexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids = value.ids;
      this._nameRegexp = value.nameRegexp;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }
}
export interface TrinoAccessControlCatalogSessionPropertiesProperty {
  /**
  * Property name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * Property names rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#names TrinoAccessControl#names}
  */
  readonly names?: string[];
}

export function trinoAccessControlCatalogSessionPropertiesPropertyToTerraform(struct?: TrinoAccessControlCatalogSessionPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function trinoAccessControlCatalogSessionPropertiesPropertyToHclTerraform(struct?: TrinoAccessControlCatalogSessionPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlCatalogSessionPropertiesPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlCatalogSessionPropertiesProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlCatalogSessionPropertiesProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameRegexp = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameRegexp = value.nameRegexp;
      this._names = value.names;
    }
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface TrinoAccessControlCatalogSessionProperties {
  /**
  * Whether the rule allows setting the property. Valid values: `NO`, `YES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#allow TrinoAccessControl#allow}
  */
  readonly allow: string;
  /**
  * Catalog matcher specifying what catalogs the rule is applied to. Exactly one of `name_regexp`, `ids` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#catalog TrinoAccessControl#catalog}
  */
  readonly catalog?: TrinoAccessControlCatalogSessionPropertiesCatalog;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#description TrinoAccessControl#description}
  */
  readonly description?: string;
  /**
  * IAM group IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#groups TrinoAccessControl#groups}
  */
  readonly groups?: string[];
  /**
  * Matcher specifying what properties the rule is applied to. Exactly one of `name_regexp`, `names` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#property TrinoAccessControl#property}
  */
  readonly property?: TrinoAccessControlCatalogSessionPropertiesProperty;
  /**
  * IAM user IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#users TrinoAccessControl#users}
  */
  readonly users?: string[];
}

export function trinoAccessControlCatalogSessionPropertiesToTerraform(struct?: TrinoAccessControlCatalogSessionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.stringToTerraform(struct!.allow),
    catalog: trinoAccessControlCatalogSessionPropertiesCatalogToTerraform(struct!.catalog),
    description: cdktf.stringToTerraform(struct!.description),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    property: trinoAccessControlCatalogSessionPropertiesPropertyToTerraform(struct!.property),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function trinoAccessControlCatalogSessionPropertiesToHclTerraform(struct?: TrinoAccessControlCatalogSessionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.stringToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: trinoAccessControlCatalogSessionPropertiesCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlCatalogSessionPropertiesCatalog",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    property: {
      value: trinoAccessControlCatalogSessionPropertiesPropertyToHclTerraform(struct!.property),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlCatalogSessionPropertiesProperty",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlCatalogSessionPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrinoAccessControlCatalogSessionProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlCatalogSessionProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._catalog.internalValue = undefined;
      this._description = undefined;
      this._groups = undefined;
      this._property.internalValue = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._catalog.internalValue = value.catalog;
      this._description = value.description;
      this._groups = value.groups;
      this._property.internalValue = value.property;
      this._users = value.users;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: string; 
  public get allow() {
    return this.getStringAttribute('allow');
  }
  public set allow(value: string) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new TrinoAccessControlCatalogSessionPropertiesCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: TrinoAccessControlCatalogSessionPropertiesCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // property - computed: false, optional: true, required: false
  private _property = new TrinoAccessControlCatalogSessionPropertiesPropertyOutputReference(this, "property");
  public get property() {
    return this._property;
  }
  public putProperty(value: TrinoAccessControlCatalogSessionPropertiesProperty) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class TrinoAccessControlCatalogSessionPropertiesList extends cdktf.ComplexList {
  public internalValue? : TrinoAccessControlCatalogSessionProperties[] | cdktf.IResolvable

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
  public get(index: number): TrinoAccessControlCatalogSessionPropertiesOutputReference {
    return new TrinoAccessControlCatalogSessionPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrinoAccessControlCatalogsCatalog {
  /**
  * Catalog IDs rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#ids TrinoAccessControl#ids}
  */
  readonly ids?: string[];
  /**
  * Catalog name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
}

export function trinoAccessControlCatalogsCatalogToTerraform(struct?: TrinoAccessControlCatalogsCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
  }
}


export function trinoAccessControlCatalogsCatalogToHclTerraform(struct?: TrinoAccessControlCatalogsCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlCatalogsCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlCatalogsCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlCatalogsCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids = undefined;
      this._nameRegexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids = value.ids;
      this._nameRegexp = value.nameRegexp;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }
}
export interface TrinoAccessControlCatalogs {
  /**
  * Catalog matcher specifying what catalogs the rule is applied to. Exactly one of `name_regexp`, `ids` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#catalog TrinoAccessControl#catalog}
  */
  readonly catalog?: TrinoAccessControlCatalogsCatalog;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#description TrinoAccessControl#description}
  */
  readonly description?: string;
  /**
  * IAM group IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#groups TrinoAccessControl#groups}
  */
  readonly groups?: string[];
  /**
  * Permission granted by the rule. Valid values: `NONE`, `READ_ONLY`, `ALL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#permission TrinoAccessControl#permission}
  */
  readonly permission: string;
  /**
  * IAM user IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#users TrinoAccessControl#users}
  */
  readonly users?: string[];
}

export function trinoAccessControlCatalogsToTerraform(struct?: TrinoAccessControlCatalogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: trinoAccessControlCatalogsCatalogToTerraform(struct!.catalog),
    description: cdktf.stringToTerraform(struct!.description),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    permission: cdktf.stringToTerraform(struct!.permission),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function trinoAccessControlCatalogsToHclTerraform(struct?: TrinoAccessControlCatalogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: trinoAccessControlCatalogsCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlCatalogsCatalog",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlCatalogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrinoAccessControlCatalogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlCatalogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog.internalValue = undefined;
      this._description = undefined;
      this._groups = undefined;
      this._permission = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog.internalValue = value.catalog;
      this._description = value.description;
      this._groups = value.groups;
      this._permission = value.permission;
      this._users = value.users;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new TrinoAccessControlCatalogsCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: TrinoAccessControlCatalogsCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class TrinoAccessControlCatalogsList extends cdktf.ComplexList {
  public internalValue? : TrinoAccessControlCatalogs[] | cdktf.IResolvable

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
  public get(index: number): TrinoAccessControlCatalogsOutputReference {
    return new TrinoAccessControlCatalogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrinoAccessControlFunctionsCatalog {
  /**
  * Catalog IDs rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#ids TrinoAccessControl#ids}
  */
  readonly ids?: string[];
  /**
  * Catalog name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
}

export function trinoAccessControlFunctionsCatalogToTerraform(struct?: TrinoAccessControlFunctionsCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
  }
}


export function trinoAccessControlFunctionsCatalogToHclTerraform(struct?: TrinoAccessControlFunctionsCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlFunctionsCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlFunctionsCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlFunctionsCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids = undefined;
      this._nameRegexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids = value.ids;
      this._nameRegexp = value.nameRegexp;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }
}
export interface TrinoAccessControlFunctionsFunction {
  /**
  * Function name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * Function names rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#names TrinoAccessControl#names}
  */
  readonly names?: string[];
}

export function trinoAccessControlFunctionsFunctionToTerraform(struct?: TrinoAccessControlFunctionsFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function trinoAccessControlFunctionsFunctionToHclTerraform(struct?: TrinoAccessControlFunctionsFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlFunctionsFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlFunctionsFunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlFunctionsFunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameRegexp = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameRegexp = value.nameRegexp;
      this._names = value.names;
    }
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface TrinoAccessControlFunctionsSchema {
  /**
  * Schema name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * Schema names rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#names TrinoAccessControl#names}
  */
  readonly names?: string[];
}

export function trinoAccessControlFunctionsSchemaToTerraform(struct?: TrinoAccessControlFunctionsSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function trinoAccessControlFunctionsSchemaToHclTerraform(struct?: TrinoAccessControlFunctionsSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlFunctionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlFunctionsSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlFunctionsSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameRegexp = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameRegexp = value.nameRegexp;
      this._names = value.names;
    }
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface TrinoAccessControlFunctions {
  /**
  * Catalog matcher specifying what catalogs the rule is applied to. Exactly one of `name_regexp`, `ids` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#catalog TrinoAccessControl#catalog}
  */
  readonly catalog?: TrinoAccessControlFunctionsCatalog;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#description TrinoAccessControl#description}
  */
  readonly description?: string;
  /**
  * Matcher specifying what functions the rule is applied to. Exactly one of `name_regexp`, `names` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#function TrinoAccessControl#function}
  */
  readonly function?: TrinoAccessControlFunctionsFunction;
  /**
  * IAM group IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#groups TrinoAccessControl#groups}
  */
  readonly groups?: string[];
  /**
  * Privileges granted by the rule. Valid values: `EXECUTE`, `GRANT_EXECUTE`, `OWNERSHIP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#privileges TrinoAccessControl#privileges}
  */
  readonly privileges?: string[];
  /**
  * Matcher specifying what Schemas the rule is applied to. Exactly one of `name_regexp`, `names` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#schema TrinoAccessControl#schema}
  */
  readonly schema?: TrinoAccessControlFunctionsSchema;
  /**
  * IAM user IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#users TrinoAccessControl#users}
  */
  readonly users?: string[];
}

export function trinoAccessControlFunctionsToTerraform(struct?: TrinoAccessControlFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: trinoAccessControlFunctionsCatalogToTerraform(struct!.catalog),
    description: cdktf.stringToTerraform(struct!.description),
    function: trinoAccessControlFunctionsFunctionToTerraform(struct!.function),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    schema: trinoAccessControlFunctionsSchemaToTerraform(struct!.schema),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function trinoAccessControlFunctionsToHclTerraform(struct?: TrinoAccessControlFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: trinoAccessControlFunctionsCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlFunctionsCatalog",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function: {
      value: trinoAccessControlFunctionsFunctionToHclTerraform(struct!.function),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlFunctionsFunction",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schema: {
      value: trinoAccessControlFunctionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlFunctionsSchema",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrinoAccessControlFunctions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._function?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function?.internalValue;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlFunctions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog.internalValue = undefined;
      this._description = undefined;
      this._function.internalValue = undefined;
      this._groups = undefined;
      this._privileges = undefined;
      this._schema.internalValue = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog.internalValue = value.catalog;
      this._description = value.description;
      this._function.internalValue = value.function;
      this._groups = value.groups;
      this._privileges = value.privileges;
      this._schema.internalValue = value.schema;
      this._users = value.users;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new TrinoAccessControlFunctionsCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: TrinoAccessControlFunctionsCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
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

  // function - computed: false, optional: true, required: false
  private _function = new TrinoAccessControlFunctionsFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: TrinoAccessControlFunctionsFunction) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // privileges - computed: false, optional: true, required: false
  private _privileges?: string[]; 
  public get privileges() {
    return this.getListAttribute('privileges');
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  public resetPrivileges() {
    this._privileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new TrinoAccessControlFunctionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: TrinoAccessControlFunctionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class TrinoAccessControlFunctionsList extends cdktf.ComplexList {
  public internalValue? : TrinoAccessControlFunctions[] | cdktf.IResolvable

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
  public get(index: number): TrinoAccessControlFunctionsOutputReference {
    return new TrinoAccessControlFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrinoAccessControlProceduresCatalog {
  /**
  * Catalog IDs rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#ids TrinoAccessControl#ids}
  */
  readonly ids?: string[];
  /**
  * Catalog name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
}

export function trinoAccessControlProceduresCatalogToTerraform(struct?: TrinoAccessControlProceduresCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
  }
}


export function trinoAccessControlProceduresCatalogToHclTerraform(struct?: TrinoAccessControlProceduresCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlProceduresCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlProceduresCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlProceduresCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids = undefined;
      this._nameRegexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids = value.ids;
      this._nameRegexp = value.nameRegexp;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }
}
export interface TrinoAccessControlProceduresProcedure {
  /**
  * Procedure name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * Procedure names rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#names TrinoAccessControl#names}
  */
  readonly names?: string[];
}

export function trinoAccessControlProceduresProcedureToTerraform(struct?: TrinoAccessControlProceduresProcedure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function trinoAccessControlProceduresProcedureToHclTerraform(struct?: TrinoAccessControlProceduresProcedure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlProceduresProcedureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlProceduresProcedure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlProceduresProcedure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameRegexp = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameRegexp = value.nameRegexp;
      this._names = value.names;
    }
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface TrinoAccessControlProceduresSchema {
  /**
  * Schema name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * Schema names rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#names TrinoAccessControl#names}
  */
  readonly names?: string[];
}

export function trinoAccessControlProceduresSchemaToTerraform(struct?: TrinoAccessControlProceduresSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function trinoAccessControlProceduresSchemaToHclTerraform(struct?: TrinoAccessControlProceduresSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlProceduresSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlProceduresSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlProceduresSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameRegexp = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameRegexp = value.nameRegexp;
      this._names = value.names;
    }
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface TrinoAccessControlProcedures {
  /**
  * Catalog matcher specifying what catalogs the rule is applied to. Exactly one of `name_regexp`, `ids` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#catalog TrinoAccessControl#catalog}
  */
  readonly catalog?: TrinoAccessControlProceduresCatalog;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#description TrinoAccessControl#description}
  */
  readonly description?: string;
  /**
  * IAM group IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#groups TrinoAccessControl#groups}
  */
  readonly groups?: string[];
  /**
  * Privileges granted by the rule. Valid values: `EXECUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#privileges TrinoAccessControl#privileges}
  */
  readonly privileges?: string[];
  /**
  * Matcher specifying what procedures the rule is applied to. Exactly one of `name_regexp`, `names` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#procedure TrinoAccessControl#procedure}
  */
  readonly procedure?: TrinoAccessControlProceduresProcedure;
  /**
  * Matcher specifying what Schemas the rule is applied to. Exactly one of `name_regexp`, `names` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#schema TrinoAccessControl#schema}
  */
  readonly schema?: TrinoAccessControlProceduresSchema;
  /**
  * IAM user IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#users TrinoAccessControl#users}
  */
  readonly users?: string[];
}

export function trinoAccessControlProceduresToTerraform(struct?: TrinoAccessControlProcedures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: trinoAccessControlProceduresCatalogToTerraform(struct!.catalog),
    description: cdktf.stringToTerraform(struct!.description),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    procedure: trinoAccessControlProceduresProcedureToTerraform(struct!.procedure),
    schema: trinoAccessControlProceduresSchemaToTerraform(struct!.schema),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function trinoAccessControlProceduresToHclTerraform(struct?: TrinoAccessControlProcedures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: trinoAccessControlProceduresCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlProceduresCatalog",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    procedure: {
      value: trinoAccessControlProceduresProcedureToHclTerraform(struct!.procedure),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlProceduresProcedure",
    },
    schema: {
      value: trinoAccessControlProceduresSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlProceduresSchema",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlProceduresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrinoAccessControlProcedures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._procedure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.procedure = this._procedure?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlProcedures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog.internalValue = undefined;
      this._description = undefined;
      this._groups = undefined;
      this._privileges = undefined;
      this._procedure.internalValue = undefined;
      this._schema.internalValue = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog.internalValue = value.catalog;
      this._description = value.description;
      this._groups = value.groups;
      this._privileges = value.privileges;
      this._procedure.internalValue = value.procedure;
      this._schema.internalValue = value.schema;
      this._users = value.users;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new TrinoAccessControlProceduresCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: TrinoAccessControlProceduresCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // privileges - computed: false, optional: true, required: false
  private _privileges?: string[]; 
  public get privileges() {
    return this.getListAttribute('privileges');
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  public resetPrivileges() {
    this._privileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // procedure - computed: false, optional: true, required: false
  private _procedure = new TrinoAccessControlProceduresProcedureOutputReference(this, "procedure");
  public get procedure() {
    return this._procedure;
  }
  public putProcedure(value: TrinoAccessControlProceduresProcedure) {
    this._procedure.internalValue = value;
  }
  public resetProcedure() {
    this._procedure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureInput() {
    return this._procedure.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new TrinoAccessControlProceduresSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: TrinoAccessControlProceduresSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class TrinoAccessControlProceduresList extends cdktf.ComplexList {
  public internalValue? : TrinoAccessControlProcedures[] | cdktf.IResolvable

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
  public get(index: number): TrinoAccessControlProceduresOutputReference {
    return new TrinoAccessControlProceduresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrinoAccessControlQueries {
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#description TrinoAccessControl#description}
  */
  readonly description?: string;
  /**
  * IAM group IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#groups TrinoAccessControl#groups}
  */
  readonly groups?: string[];
  /**
  * Privileges granted by the rule. Valid values: `VIEW`, `EXECUTE`, `KILL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#privileges TrinoAccessControl#privileges}
  */
  readonly privileges?: string[];
  /**
  * Owners of queries the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#query_owners TrinoAccessControl#query_owners}
  */
  readonly queryOwners?: string[];
  /**
  * IAM user IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#users TrinoAccessControl#users}
  */
  readonly users?: string[];
}

export function trinoAccessControlQueriesToTerraform(struct?: TrinoAccessControlQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    query_owners: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryOwners),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function trinoAccessControlQueriesToHclTerraform(struct?: TrinoAccessControlQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_owners: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryOwners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrinoAccessControlQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._queryOwners !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryOwners = this._queryOwners;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._groups = undefined;
      this._privileges = undefined;
      this._queryOwners = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._groups = value.groups;
      this._privileges = value.privileges;
      this._queryOwners = value.queryOwners;
      this._users = value.users;
    }
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // privileges - computed: false, optional: true, required: false
  private _privileges?: string[]; 
  public get privileges() {
    return this.getListAttribute('privileges');
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  public resetPrivileges() {
    this._privileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // query_owners - computed: false, optional: true, required: false
  private _queryOwners?: string[]; 
  public get queryOwners() {
    return this.getListAttribute('query_owners');
  }
  public set queryOwners(value: string[]) {
    this._queryOwners = value;
  }
  public resetQueryOwners() {
    this._queryOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryOwnersInput() {
    return this._queryOwners;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class TrinoAccessControlQueriesList extends cdktf.ComplexList {
  public internalValue? : TrinoAccessControlQueries[] | cdktf.IResolvable

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
  public get(index: number): TrinoAccessControlQueriesOutputReference {
    return new TrinoAccessControlQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrinoAccessControlSchemasCatalog {
  /**
  * Catalog IDs rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#ids TrinoAccessControl#ids}
  */
  readonly ids?: string[];
  /**
  * Catalog name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
}

export function trinoAccessControlSchemasCatalogToTerraform(struct?: TrinoAccessControlSchemasCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
  }
}


export function trinoAccessControlSchemasCatalogToHclTerraform(struct?: TrinoAccessControlSchemasCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlSchemasCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlSchemasCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlSchemasCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids = undefined;
      this._nameRegexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids = value.ids;
      this._nameRegexp = value.nameRegexp;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }
}
export interface TrinoAccessControlSchemasSchema {
  /**
  * Schema name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * Schema names rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#names TrinoAccessControl#names}
  */
  readonly names?: string[];
}

export function trinoAccessControlSchemasSchemaToTerraform(struct?: TrinoAccessControlSchemasSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function trinoAccessControlSchemasSchemaToHclTerraform(struct?: TrinoAccessControlSchemasSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlSchemasSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlSchemasSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlSchemasSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameRegexp = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameRegexp = value.nameRegexp;
      this._names = value.names;
    }
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface TrinoAccessControlSchemas {
  /**
  * Catalog matcher specifying what catalogs the rule is applied to. Exactly one of `name_regexp`, `ids` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#catalog TrinoAccessControl#catalog}
  */
  readonly catalog?: TrinoAccessControlSchemasCatalog;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#description TrinoAccessControl#description}
  */
  readonly description?: string;
  /**
  * IAM group IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#groups TrinoAccessControl#groups}
  */
  readonly groups?: string[];
  /**
  * Ownership granted by the rule. Valid values: `NO`, `YES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#owner TrinoAccessControl#owner}
  */
  readonly owner: string;
  /**
  * Matcher specifying what schemas the rule is applied to. Exactly one of `name_regexp`, `names` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#schema TrinoAccessControl#schema}
  */
  readonly schema?: TrinoAccessControlSchemasSchema;
  /**
  * IAM user IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#users TrinoAccessControl#users}
  */
  readonly users?: string[];
}

export function trinoAccessControlSchemasToTerraform(struct?: TrinoAccessControlSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: trinoAccessControlSchemasCatalogToTerraform(struct!.catalog),
    description: cdktf.stringToTerraform(struct!.description),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    owner: cdktf.stringToTerraform(struct!.owner),
    schema: trinoAccessControlSchemasSchemaToTerraform(struct!.schema),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function trinoAccessControlSchemasToHclTerraform(struct?: TrinoAccessControlSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: trinoAccessControlSchemasCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlSchemasCatalog",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: trinoAccessControlSchemasSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlSchemasSchema",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrinoAccessControlSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog.internalValue = undefined;
      this._description = undefined;
      this._groups = undefined;
      this._owner = undefined;
      this._schema.internalValue = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog.internalValue = value.catalog;
      this._description = value.description;
      this._groups = value.groups;
      this._owner = value.owner;
      this._schema.internalValue = value.schema;
      this._users = value.users;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new TrinoAccessControlSchemasCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: TrinoAccessControlSchemasCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new TrinoAccessControlSchemasSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: TrinoAccessControlSchemasSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class TrinoAccessControlSchemasList extends cdktf.ComplexList {
  public internalValue? : TrinoAccessControlSchemas[] | cdktf.IResolvable

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
  public get(index: number): TrinoAccessControlSchemasOutputReference {
    return new TrinoAccessControlSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrinoAccessControlSystemSessionPropertiesProperty {
  /**
  * Property name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * Property names rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#names TrinoAccessControl#names}
  */
  readonly names?: string[];
}

export function trinoAccessControlSystemSessionPropertiesPropertyToTerraform(struct?: TrinoAccessControlSystemSessionPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function trinoAccessControlSystemSessionPropertiesPropertyToHclTerraform(struct?: TrinoAccessControlSystemSessionPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlSystemSessionPropertiesPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlSystemSessionPropertiesProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlSystemSessionPropertiesProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameRegexp = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameRegexp = value.nameRegexp;
      this._names = value.names;
    }
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface TrinoAccessControlSystemSessionProperties {
  /**
  * Whether the rule allows setting the property. Valid values: `NO`, `YES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#allow TrinoAccessControl#allow}
  */
  readonly allow: string;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#description TrinoAccessControl#description}
  */
  readonly description?: string;
  /**
  * IAM group IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#groups TrinoAccessControl#groups}
  */
  readonly groups?: string[];
  /**
  * Matcher specifying what properties the rule is applied to. Exactly one of `name_regexp`, `names` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#property TrinoAccessControl#property}
  */
  readonly property?: TrinoAccessControlSystemSessionPropertiesProperty;
  /**
  * IAM user IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#users TrinoAccessControl#users}
  */
  readonly users?: string[];
}

export function trinoAccessControlSystemSessionPropertiesToTerraform(struct?: TrinoAccessControlSystemSessionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.stringToTerraform(struct!.allow),
    description: cdktf.stringToTerraform(struct!.description),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    property: trinoAccessControlSystemSessionPropertiesPropertyToTerraform(struct!.property),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function trinoAccessControlSystemSessionPropertiesToHclTerraform(struct?: TrinoAccessControlSystemSessionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.stringToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    property: {
      value: trinoAccessControlSystemSessionPropertiesPropertyToHclTerraform(struct!.property),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlSystemSessionPropertiesProperty",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlSystemSessionPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrinoAccessControlSystemSessionProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlSystemSessionProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._description = undefined;
      this._groups = undefined;
      this._property.internalValue = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._description = value.description;
      this._groups = value.groups;
      this._property.internalValue = value.property;
      this._users = value.users;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: string; 
  public get allow() {
    return this.getStringAttribute('allow');
  }
  public set allow(value: string) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
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

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // property - computed: false, optional: true, required: false
  private _property = new TrinoAccessControlSystemSessionPropertiesPropertyOutputReference(this, "property");
  public get property() {
    return this._property;
  }
  public putProperty(value: TrinoAccessControlSystemSessionPropertiesProperty) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class TrinoAccessControlSystemSessionPropertiesList extends cdktf.ComplexList {
  public internalValue? : TrinoAccessControlSystemSessionProperties[] | cdktf.IResolvable

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
  public get(index: number): TrinoAccessControlSystemSessionPropertiesOutputReference {
    return new TrinoAccessControlSystemSessionPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrinoAccessControlTablesCatalog {
  /**
  * Catalog IDs rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#ids TrinoAccessControl#ids}
  */
  readonly ids?: string[];
  /**
  * Catalog name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
}

export function trinoAccessControlTablesCatalogToTerraform(struct?: TrinoAccessControlTablesCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
  }
}


export function trinoAccessControlTablesCatalogToHclTerraform(struct?: TrinoAccessControlTablesCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlTablesCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlTablesCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlTablesCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids = undefined;
      this._nameRegexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids = value.ids;
      this._nameRegexp = value.nameRegexp;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }
}
export interface TrinoAccessControlTablesColumns {
  /**
  * Column access mode. Valid values: `NONE`, `ALL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#access TrinoAccessControl#access}
  */
  readonly access: string;
  /**
  * SQL expression mask to evaluate instead of original column values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#mask TrinoAccessControl#mask}
  */
  readonly mask?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name TrinoAccessControl#name}
  */
  readonly name: string;
}

export function trinoAccessControlTablesColumnsToTerraform(struct?: TrinoAccessControlTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    mask: cdktf.stringToTerraform(struct!.mask),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function trinoAccessControlTablesColumnsToHclTerraform(struct?: TrinoAccessControlTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
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

export class TrinoAccessControlTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrinoAccessControlTablesColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlTablesColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._mask = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._mask = value.mask;
      this._name = value.name;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
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
}

export class TrinoAccessControlTablesColumnsList extends cdktf.ComplexList {
  public internalValue? : TrinoAccessControlTablesColumns[] | cdktf.IResolvable

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
  public get(index: number): TrinoAccessControlTablesColumnsOutputReference {
    return new TrinoAccessControlTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrinoAccessControlTablesSchema {
  /**
  * Schema name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * Schema names rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#names TrinoAccessControl#names}
  */
  readonly names?: string[];
}

export function trinoAccessControlTablesSchemaToTerraform(struct?: TrinoAccessControlTablesSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function trinoAccessControlTablesSchemaToHclTerraform(struct?: TrinoAccessControlTablesSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlTablesSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlTablesSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlTablesSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameRegexp = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameRegexp = value.nameRegexp;
      this._names = value.names;
    }
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface TrinoAccessControlTablesTable {
  /**
  * Table name regexp the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#name_regexp TrinoAccessControl#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * Table names rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#names TrinoAccessControl#names}
  */
  readonly names?: string[];
}

export function trinoAccessControlTablesTableToTerraform(struct?: TrinoAccessControlTablesTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regexp: cdktf.stringToTerraform(struct!.nameRegexp),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function trinoAccessControlTablesTableToHclTerraform(struct?: TrinoAccessControlTablesTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regexp: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlTablesTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlTablesTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexp = this._nameRegexp;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlTablesTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameRegexp = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameRegexp = value.nameRegexp;
      this._names = value.names;
    }
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface TrinoAccessControlTables {
  /**
  * Catalog matcher specifying what catalogs the rule is applied to. Exactly one of `name_regexp`, `ids` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#catalog TrinoAccessControl#catalog}
  */
  readonly catalog?: TrinoAccessControlTablesCatalog;
  /**
  * Column rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#columns TrinoAccessControl#columns}
  */
  readonly columns?: TrinoAccessControlTablesColumns[] | cdktf.IResolvable;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#description TrinoAccessControl#description}
  */
  readonly description?: string;
  /**
  * Boolean SQL expression to filter table rows for particular user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#filter TrinoAccessControl#filter}
  */
  readonly filter?: string;
  /**
  * IAM group IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#groups TrinoAccessControl#groups}
  */
  readonly groups?: string[];
  /**
  * Privileges granted by the rule. Valid values: `SELECT`, `INSERT`, `DELETE`, `UPDATE`, `OWNERSHIP`, `GRANT_SELECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#privileges TrinoAccessControl#privileges}
  */
  readonly privileges?: string[];
  /**
  * Matcher specifying what Schemas the rule is applied to. Exactly one of `name_regexp`, `names` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#schema TrinoAccessControl#schema}
  */
  readonly schema?: TrinoAccessControlTablesSchema;
  /**
  * Matcher specifying what tables the rule is applied to. Exactly one of `name_regexp`, `names` attributes should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#table TrinoAccessControl#table}
  */
  readonly table?: TrinoAccessControlTablesTable;
  /**
  * IAM user IDs the rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#users TrinoAccessControl#users}
  */
  readonly users?: string[];
}

export function trinoAccessControlTablesToTerraform(struct?: TrinoAccessControlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: trinoAccessControlTablesCatalogToTerraform(struct!.catalog),
    columns: cdktf.listMapper(trinoAccessControlTablesColumnsToTerraform, false)(struct!.columns),
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    schema: trinoAccessControlTablesSchemaToTerraform(struct!.schema),
    table: trinoAccessControlTablesTableToTerraform(struct!.table),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function trinoAccessControlTablesToHclTerraform(struct?: TrinoAccessControlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: trinoAccessControlTablesCatalogToHclTerraform(struct!.catalog),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlTablesCatalog",
    },
    columns: {
      value: cdktf.listMapperHcl(trinoAccessControlTablesColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "TrinoAccessControlTablesColumnsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schema: {
      value: trinoAccessControlTablesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlTablesSchema",
    },
    table: {
      value: trinoAccessControlTablesTableToHclTerraform(struct!.table),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoAccessControlTablesTable",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoAccessControlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrinoAccessControlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog.internalValue = undefined;
      this._columns.internalValue = undefined;
      this._description = undefined;
      this._filter = undefined;
      this._groups = undefined;
      this._privileges = undefined;
      this._schema.internalValue = undefined;
      this._table.internalValue = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog.internalValue = value.catalog;
      this._columns.internalValue = value.columns;
      this._description = value.description;
      this._filter = value.filter;
      this._groups = value.groups;
      this._privileges = value.privileges;
      this._schema.internalValue = value.schema;
      this._table.internalValue = value.table;
      this._users = value.users;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new TrinoAccessControlTablesCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: TrinoAccessControlTablesCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new TrinoAccessControlTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: TrinoAccessControlTablesColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // privileges - computed: false, optional: true, required: false
  private _privileges?: string[]; 
  public get privileges() {
    return this.getListAttribute('privileges');
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  public resetPrivileges() {
    this._privileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new TrinoAccessControlTablesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: TrinoAccessControlTablesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // table - computed: false, optional: true, required: false
  private _table = new TrinoAccessControlTablesTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: TrinoAccessControlTablesTable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class TrinoAccessControlTablesList extends cdktf.ComplexList {
  public internalValue? : TrinoAccessControlTables[] | cdktf.IResolvable

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
  public get(index: number): TrinoAccessControlTablesOutputReference {
    return new TrinoAccessControlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrinoAccessControlTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#create TrinoAccessControl#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#delete TrinoAccessControl#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#update TrinoAccessControl#update}
  */
  readonly update?: string;
}

export function trinoAccessControlTimeoutsToTerraform(struct?: TrinoAccessControlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function trinoAccessControlTimeoutsToHclTerraform(struct?: TrinoAccessControlTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class TrinoAccessControlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoAccessControlTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoAccessControlTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control yandex_trino_access_control}
*/
export class TrinoAccessControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_trino_access_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrinoAccessControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrinoAccessControl to import
  * @param importFromId The id of the existing TrinoAccessControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrinoAccessControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_trino_access_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/trino_access_control yandex_trino_access_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrinoAccessControlConfig
  */
  public constructor(scope: Construct, id: string, config: TrinoAccessControlConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_trino_access_control',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.174.0',
        providerVersionConstraint: '0.174.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogSessionProperties.internalValue = config.catalogSessionProperties;
    this._catalogs.internalValue = config.catalogs;
    this._clusterId = config.clusterId;
    this._functions.internalValue = config.functions;
    this._procedures.internalValue = config.procedures;
    this._queries.internalValue = config.queries;
    this._schemas.internalValue = config.schemas;
    this._systemSessionProperties.internalValue = config.systemSessionProperties;
    this._tables.internalValue = config.tables;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_session_properties - computed: false, optional: true, required: false
  private _catalogSessionProperties = new TrinoAccessControlCatalogSessionPropertiesList(this, "catalog_session_properties", false);
  public get catalogSessionProperties() {
    return this._catalogSessionProperties;
  }
  public putCatalogSessionProperties(value: TrinoAccessControlCatalogSessionProperties[] | cdktf.IResolvable) {
    this._catalogSessionProperties.internalValue = value;
  }
  public resetCatalogSessionProperties() {
    this._catalogSessionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogSessionPropertiesInput() {
    return this._catalogSessionProperties.internalValue;
  }

  // catalogs - computed: false, optional: true, required: false
  private _catalogs = new TrinoAccessControlCatalogsList(this, "catalogs", false);
  public get catalogs() {
    return this._catalogs;
  }
  public putCatalogs(value: TrinoAccessControlCatalogs[] | cdktf.IResolvable) {
    this._catalogs.internalValue = value;
  }
  public resetCatalogs() {
    this._catalogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogsInput() {
    return this._catalogs.internalValue;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // functions - computed: false, optional: true, required: false
  private _functions = new TrinoAccessControlFunctionsList(this, "functions", false);
  public get functions() {
    return this._functions;
  }
  public putFunctions(value: TrinoAccessControlFunctions[] | cdktf.IResolvable) {
    this._functions.internalValue = value;
  }
  public resetFunctions() {
    this._functions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions.internalValue;
  }

  // procedures - computed: false, optional: true, required: false
  private _procedures = new TrinoAccessControlProceduresList(this, "procedures", false);
  public get procedures() {
    return this._procedures;
  }
  public putProcedures(value: TrinoAccessControlProcedures[] | cdktf.IResolvable) {
    this._procedures.internalValue = value;
  }
  public resetProcedures() {
    this._procedures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proceduresInput() {
    return this._procedures.internalValue;
  }

  // queries - computed: false, optional: true, required: false
  private _queries = new TrinoAccessControlQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: TrinoAccessControlQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  public resetQueries() {
    this._queries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }

  // schemas - computed: false, optional: true, required: false
  private _schemas = new TrinoAccessControlSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: TrinoAccessControlSchemas[] | cdktf.IResolvable) {
    this._schemas.internalValue = value;
  }
  public resetSchemas() {
    this._schemas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }

  // system_session_properties - computed: false, optional: true, required: false
  private _systemSessionProperties = new TrinoAccessControlSystemSessionPropertiesList(this, "system_session_properties", false);
  public get systemSessionProperties() {
    return this._systemSessionProperties;
  }
  public putSystemSessionProperties(value: TrinoAccessControlSystemSessionProperties[] | cdktf.IResolvable) {
    this._systemSessionProperties.internalValue = value;
  }
  public resetSystemSessionProperties() {
    this._systemSessionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSessionPropertiesInput() {
    return this._systemSessionProperties.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new TrinoAccessControlTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: TrinoAccessControlTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TrinoAccessControlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TrinoAccessControlTimeouts) {
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
      catalog_session_properties: cdktf.listMapper(trinoAccessControlCatalogSessionPropertiesToTerraform, false)(this._catalogSessionProperties.internalValue),
      catalogs: cdktf.listMapper(trinoAccessControlCatalogsToTerraform, false)(this._catalogs.internalValue),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      functions: cdktf.listMapper(trinoAccessControlFunctionsToTerraform, false)(this._functions.internalValue),
      procedures: cdktf.listMapper(trinoAccessControlProceduresToTerraform, false)(this._procedures.internalValue),
      queries: cdktf.listMapper(trinoAccessControlQueriesToTerraform, false)(this._queries.internalValue),
      schemas: cdktf.listMapper(trinoAccessControlSchemasToTerraform, false)(this._schemas.internalValue),
      system_session_properties: cdktf.listMapper(trinoAccessControlSystemSessionPropertiesToTerraform, false)(this._systemSessionProperties.internalValue),
      tables: cdktf.listMapper(trinoAccessControlTablesToTerraform, false)(this._tables.internalValue),
      timeouts: trinoAccessControlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_session_properties: {
        value: cdktf.listMapperHcl(trinoAccessControlCatalogSessionPropertiesToHclTerraform, false)(this._catalogSessionProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrinoAccessControlCatalogSessionPropertiesList",
      },
      catalogs: {
        value: cdktf.listMapperHcl(trinoAccessControlCatalogsToHclTerraform, false)(this._catalogs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrinoAccessControlCatalogsList",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      functions: {
        value: cdktf.listMapperHcl(trinoAccessControlFunctionsToHclTerraform, false)(this._functions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrinoAccessControlFunctionsList",
      },
      procedures: {
        value: cdktf.listMapperHcl(trinoAccessControlProceduresToHclTerraform, false)(this._procedures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrinoAccessControlProceduresList",
      },
      queries: {
        value: cdktf.listMapperHcl(trinoAccessControlQueriesToHclTerraform, false)(this._queries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrinoAccessControlQueriesList",
      },
      schemas: {
        value: cdktf.listMapperHcl(trinoAccessControlSchemasToHclTerraform, false)(this._schemas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrinoAccessControlSchemasList",
      },
      system_session_properties: {
        value: cdktf.listMapperHcl(trinoAccessControlSystemSessionPropertiesToHclTerraform, false)(this._systemSessionProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrinoAccessControlSystemSessionPropertiesList",
      },
      tables: {
        value: cdktf.listMapperHcl(trinoAccessControlTablesToHclTerraform, false)(this._tables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrinoAccessControlTablesList",
      },
      timeouts: {
        value: trinoAccessControlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoAccessControlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
