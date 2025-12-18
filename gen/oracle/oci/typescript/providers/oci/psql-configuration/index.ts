// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PsqlConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#compartment_id PsqlConfiguration#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#compatible_shapes PsqlConfiguration#compatible_shapes}
  */
  readonly compatibleShapes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#db_version PsqlConfiguration#db_version}
  */
  readonly dbVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#defined_tags PsqlConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#description PsqlConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#display_name PsqlConfiguration#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#freeform_tags PsqlConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#id PsqlConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#instance_memory_size_in_gbs PsqlConfiguration#instance_memory_size_in_gbs}
  */
  readonly instanceMemorySizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#instance_ocpu_count PsqlConfiguration#instance_ocpu_count}
  */
  readonly instanceOcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#is_flexible PsqlConfiguration#is_flexible}
  */
  readonly isFlexible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#shape PsqlConfiguration#shape}
  */
  readonly shape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#system_tags PsqlConfiguration#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * db_configuration_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#db_configuration_overrides PsqlConfiguration#db_configuration_overrides}
  */
  readonly dbConfigurationOverrides: PsqlConfigurationDbConfigurationOverrides;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#timeouts PsqlConfiguration#timeouts}
  */
  readonly timeouts?: PsqlConfigurationTimeouts;
}
export interface PsqlConfigurationConfigurationDetailsItems {
}

export function psqlConfigurationConfigurationDetailsItemsToTerraform(struct?: PsqlConfigurationConfigurationDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function psqlConfigurationConfigurationDetailsItemsToHclTerraform(struct?: PsqlConfigurationConfigurationDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PsqlConfigurationConfigurationDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PsqlConfigurationConfigurationDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlConfigurationConfigurationDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getStringAttribute('allowed_values');
  }

  // config_key - computed: true, optional: false, required: false
  public get configKey() {
    return this.getStringAttribute('config_key');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // default_config_value - computed: true, optional: false, required: false
  public get defaultConfigValue() {
    return this.getStringAttribute('default_config_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_overridable - computed: true, optional: false, required: false
  public get isOverridable() {
    return this.getBooleanAttribute('is_overridable');
  }

  // is_restart_required - computed: true, optional: false, required: false
  public get isRestartRequired() {
    return this.getBooleanAttribute('is_restart_required');
  }

  // overriden_config_value - computed: true, optional: false, required: false
  public get overridenConfigValue() {
    return this.getStringAttribute('overriden_config_value');
  }
}

export class PsqlConfigurationConfigurationDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): PsqlConfigurationConfigurationDetailsItemsOutputReference {
    return new PsqlConfigurationConfigurationDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PsqlConfigurationConfigurationDetails {
}

export function psqlConfigurationConfigurationDetailsToTerraform(struct?: PsqlConfigurationConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function psqlConfigurationConfigurationDetailsToHclTerraform(struct?: PsqlConfigurationConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PsqlConfigurationConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PsqlConfigurationConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlConfigurationConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new PsqlConfigurationConfigurationDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class PsqlConfigurationConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): PsqlConfigurationConfigurationDetailsOutputReference {
    return new PsqlConfigurationConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PsqlConfigurationDbConfigurationOverridesItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#config_key PsqlConfiguration#config_key}
  */
  readonly configKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#overriden_config_value PsqlConfiguration#overriden_config_value}
  */
  readonly overridenConfigValue: string;
}

export function psqlConfigurationDbConfigurationOverridesItemsToTerraform(struct?: PsqlConfigurationDbConfigurationOverridesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_key: cdktf.stringToTerraform(struct!.configKey),
    overriden_config_value: cdktf.stringToTerraform(struct!.overridenConfigValue),
  }
}


export function psqlConfigurationDbConfigurationOverridesItemsToHclTerraform(struct?: PsqlConfigurationDbConfigurationOverridesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_key: {
      value: cdktf.stringToHclTerraform(struct!.configKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overriden_config_value: {
      value: cdktf.stringToHclTerraform(struct!.overridenConfigValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlConfigurationDbConfigurationOverridesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PsqlConfigurationDbConfigurationOverridesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.configKey = this._configKey;
    }
    if (this._overridenConfigValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridenConfigValue = this._overridenConfigValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlConfigurationDbConfigurationOverridesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configKey = undefined;
      this._overridenConfigValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configKey = value.configKey;
      this._overridenConfigValue = value.overridenConfigValue;
    }
  }

  // config_key - computed: false, optional: false, required: true
  private _configKey?: string; 
  public get configKey() {
    return this.getStringAttribute('config_key');
  }
  public set configKey(value: string) {
    this._configKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configKeyInput() {
    return this._configKey;
  }

  // overriden_config_value - computed: false, optional: false, required: true
  private _overridenConfigValue?: string; 
  public get overridenConfigValue() {
    return this.getStringAttribute('overriden_config_value');
  }
  public set overridenConfigValue(value: string) {
    this._overridenConfigValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overridenConfigValueInput() {
    return this._overridenConfigValue;
  }
}

export class PsqlConfigurationDbConfigurationOverridesItemsList extends cdktf.ComplexList {
  public internalValue? : PsqlConfigurationDbConfigurationOverridesItems[] | cdktf.IResolvable

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
  public get(index: number): PsqlConfigurationDbConfigurationOverridesItemsOutputReference {
    return new PsqlConfigurationDbConfigurationOverridesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PsqlConfigurationDbConfigurationOverrides {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#items PsqlConfiguration#items}
  */
  readonly items: PsqlConfigurationDbConfigurationOverridesItems[] | cdktf.IResolvable;
}

export function psqlConfigurationDbConfigurationOverridesToTerraform(struct?: PsqlConfigurationDbConfigurationOverridesOutputReference | PsqlConfigurationDbConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(psqlConfigurationDbConfigurationOverridesItemsToTerraform, true)(struct!.items),
  }
}


export function psqlConfigurationDbConfigurationOverridesToHclTerraform(struct?: PsqlConfigurationDbConfigurationOverridesOutputReference | PsqlConfigurationDbConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(psqlConfigurationDbConfigurationOverridesItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "PsqlConfigurationDbConfigurationOverridesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlConfigurationDbConfigurationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PsqlConfigurationDbConfigurationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlConfigurationDbConfigurationOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new PsqlConfigurationDbConfigurationOverridesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: PsqlConfigurationDbConfigurationOverridesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface PsqlConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#create PsqlConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#delete PsqlConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#update PsqlConfiguration#update}
  */
  readonly update?: string;
}

export function psqlConfigurationTimeoutsToTerraform(struct?: PsqlConfigurationTimeouts | cdktf.IResolvable): any {
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


export function psqlConfigurationTimeoutsToHclTerraform(struct?: PsqlConfigurationTimeouts | cdktf.IResolvable): any {
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

export class PsqlConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PsqlConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PsqlConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration oci_psql_configuration}
*/
export class PsqlConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_psql_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PsqlConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PsqlConfiguration to import
  * @param importFromId The id of the existing PsqlConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PsqlConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_psql_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/psql_configuration oci_psql_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PsqlConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: PsqlConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_psql_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._compatibleShapes = config.compatibleShapes;
    this._dbVersion = config.dbVersion;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._instanceMemorySizeInGbs = config.instanceMemorySizeInGbs;
    this._instanceOcpuCount = config.instanceOcpuCount;
    this._isFlexible = config.isFlexible;
    this._shape = config.shape;
    this._systemTags = config.systemTags;
    this._dbConfigurationOverrides.internalValue = config.dbConfigurationOverrides;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compatible_shapes - computed: true, optional: true, required: false
  private _compatibleShapes?: string[]; 
  public get compatibleShapes() {
    return this.getListAttribute('compatible_shapes');
  }
  public set compatibleShapes(value: string[]) {
    this._compatibleShapes = value;
  }
  public resetCompatibleShapes() {
    this._compatibleShapes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleShapesInput() {
    return this._compatibleShapes;
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // configuration_details - computed: true, optional: false, required: false
  private _configurationDetails = new PsqlConfigurationConfigurationDetailsList(this, "configuration_details", false);
  public get configurationDetails() {
    return this._configurationDetails;
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // default_config_id - computed: true, optional: false, required: false
  public get defaultConfigId() {
    return this.getStringAttribute('default_config_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // instance_memory_size_in_gbs - computed: true, optional: true, required: false
  private _instanceMemorySizeInGbs?: number; 
  public get instanceMemorySizeInGbs() {
    return this.getNumberAttribute('instance_memory_size_in_gbs');
  }
  public set instanceMemorySizeInGbs(value: number) {
    this._instanceMemorySizeInGbs = value;
  }
  public resetInstanceMemorySizeInGbs() {
    this._instanceMemorySizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMemorySizeInGbsInput() {
    return this._instanceMemorySizeInGbs;
  }

  // instance_ocpu_count - computed: true, optional: true, required: false
  private _instanceOcpuCount?: number; 
  public get instanceOcpuCount() {
    return this.getNumberAttribute('instance_ocpu_count');
  }
  public set instanceOcpuCount(value: number) {
    this._instanceOcpuCount = value;
  }
  public resetInstanceOcpuCount() {
    this._instanceOcpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceOcpuCountInput() {
    return this._instanceOcpuCount;
  }

  // is_flexible - computed: true, optional: true, required: false
  private _isFlexible?: boolean | cdktf.IResolvable; 
  public get isFlexible() {
    return this.getBooleanAttribute('is_flexible');
  }
  public set isFlexible(value: boolean | cdktf.IResolvable) {
    this._isFlexible = value;
  }
  public resetIsFlexible() {
    this._isFlexible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFlexibleInput() {
    return this._isFlexible;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // db_configuration_overrides - computed: false, optional: false, required: true
  private _dbConfigurationOverrides = new PsqlConfigurationDbConfigurationOverridesOutputReference(this, "db_configuration_overrides");
  public get dbConfigurationOverrides() {
    return this._dbConfigurationOverrides;
  }
  public putDbConfigurationOverrides(value: PsqlConfigurationDbConfigurationOverrides) {
    this._dbConfigurationOverrides.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbConfigurationOverridesInput() {
    return this._dbConfigurationOverrides.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PsqlConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PsqlConfigurationTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compatible_shapes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibleShapes),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      instance_memory_size_in_gbs: cdktf.numberToTerraform(this._instanceMemorySizeInGbs),
      instance_ocpu_count: cdktf.numberToTerraform(this._instanceOcpuCount),
      is_flexible: cdktf.booleanToTerraform(this._isFlexible),
      shape: cdktf.stringToTerraform(this._shape),
      system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemTags),
      db_configuration_overrides: psqlConfigurationDbConfigurationOverridesToTerraform(this._dbConfigurationOverrides.internalValue),
      timeouts: psqlConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compatible_shapes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compatibleShapes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_memory_size_in_gbs: {
        value: cdktf.numberToHclTerraform(this._instanceMemorySizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._instanceOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_flexible: {
        value: cdktf.booleanToHclTerraform(this._isFlexible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      db_configuration_overrides: {
        value: psqlConfigurationDbConfigurationOverridesToHclTerraform(this._dbConfigurationOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PsqlConfigurationDbConfigurationOverridesList",
      },
      timeouts: {
        value: psqlConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PsqlConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
