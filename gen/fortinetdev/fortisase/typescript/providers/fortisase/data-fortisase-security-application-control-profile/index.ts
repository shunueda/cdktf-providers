// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityApplicationControlProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#application_category_controls DataFortisaseSecurityApplicationControlProfile#application_category_controls}
  */
  readonly applicationCategoryControls?: DataFortisaseSecurityApplicationControlProfileApplicationCategoryControls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#application_controls DataFortisaseSecurityApplicationControlProfile#application_controls}
  */
  readonly applicationControls?: DataFortisaseSecurityApplicationControlProfileApplicationControls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#block_non_default_port_applications DataFortisaseSecurityApplicationControlProfile#block_non_default_port_applications}
  */
  readonly blockNonDefaultPortApplications?: string;
  /**
  * The direction of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#direction DataFortisaseSecurityApplicationControlProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#network_protocol_enforcement DataFortisaseSecurityApplicationControlProfile#network_protocol_enforcement}
  */
  readonly networkProtocolEnforcement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#network_protocols DataFortisaseSecurityApplicationControlProfile#network_protocols}
  */
  readonly networkProtocols?: DataFortisaseSecurityApplicationControlProfileNetworkProtocols[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#primary_key DataFortisaseSecurityApplicationControlProfile#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#unknown_application_action DataFortisaseSecurityApplicationControlProfile#unknown_application_action}
  */
  readonly unknownApplicationAction?: string;
}
export interface DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#datasource DataFortisaseSecurityApplicationControlProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#primary_key DataFortisaseSecurityApplicationControlProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategoryToTerraform(struct?: DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategoryToHclTerraform(struct?: DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityApplicationControlProfileApplicationCategoryControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#action DataFortisaseSecurityApplicationControlProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#category DataFortisaseSecurityApplicationControlProfile#category}
  */
  readonly category?: DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategory;
}

export function dataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsToTerraform(struct?: DataFortisaseSecurityApplicationControlProfileApplicationCategoryControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: dataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategoryToTerraform(struct!.category),
  }
}


export function dataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsToHclTerraform(struct?: DataFortisaseSecurityApplicationControlProfileApplicationCategoryControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: dataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityApplicationControlProfileApplicationCategoryControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityApplicationControlProfileApplicationCategoryControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category.internalValue = value.category;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // category - computed: true, optional: true, required: false
  private _category = new DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}

export class DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityApplicationControlProfileApplicationCategoryControls[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsOutputReference {
    return new DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityApplicationControlProfileApplicationControlsApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#datasource DataFortisaseSecurityApplicationControlProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#primary_key DataFortisaseSecurityApplicationControlProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityApplicationControlProfileApplicationControlsApplicationsToTerraform(struct?: DataFortisaseSecurityApplicationControlProfileApplicationControlsApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityApplicationControlProfileApplicationControlsApplicationsToHclTerraform(struct?: DataFortisaseSecurityApplicationControlProfileApplicationControlsApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityApplicationControlProfileApplicationControlsApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityApplicationControlProfileApplicationControlsApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityApplicationControlProfileApplicationControlsApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DataFortisaseSecurityApplicationControlProfileApplicationControlsApplicationsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityApplicationControlProfileApplicationControlsApplications[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityApplicationControlProfileApplicationControlsApplicationsOutputReference {
    return new DataFortisaseSecurityApplicationControlProfileApplicationControlsApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityApplicationControlProfileApplicationControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#action DataFortisaseSecurityApplicationControlProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#applications DataFortisaseSecurityApplicationControlProfile#applications}
  */
  readonly applications?: DataFortisaseSecurityApplicationControlProfileApplicationControlsApplications[] | cdktf.IResolvable;
}

export function dataFortisaseSecurityApplicationControlProfileApplicationControlsToTerraform(struct?: DataFortisaseSecurityApplicationControlProfileApplicationControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    applications: cdktf.listMapper(dataFortisaseSecurityApplicationControlProfileApplicationControlsApplicationsToTerraform, false)(struct!.applications),
  }
}


export function dataFortisaseSecurityApplicationControlProfileApplicationControlsToHclTerraform(struct?: DataFortisaseSecurityApplicationControlProfileApplicationControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applications: {
      value: cdktf.listMapperHcl(dataFortisaseSecurityApplicationControlProfileApplicationControlsApplicationsToHclTerraform, false)(struct!.applications),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisaseSecurityApplicationControlProfileApplicationControlsApplicationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityApplicationControlProfileApplicationControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityApplicationControlProfileApplicationControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._applications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityApplicationControlProfileApplicationControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._applications.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._applications.internalValue = value.applications;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // applications - computed: true, optional: true, required: false
  private _applications = new DataFortisaseSecurityApplicationControlProfileApplicationControlsApplicationsList(this, "applications", false);
  public get applications() {
    return this._applications;
  }
  public putApplications(value: DataFortisaseSecurityApplicationControlProfileApplicationControlsApplications[] | cdktf.IResolvable) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }
}

export class DataFortisaseSecurityApplicationControlProfileApplicationControlsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityApplicationControlProfileApplicationControls[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityApplicationControlProfileApplicationControlsOutputReference {
    return new DataFortisaseSecurityApplicationControlProfileApplicationControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityApplicationControlProfileNetworkProtocols {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#action DataFortisaseSecurityApplicationControlProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#port DataFortisaseSecurityApplicationControlProfile#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#services DataFortisaseSecurityApplicationControlProfile#services}
  */
  readonly services?: string[];
}

export function dataFortisaseSecurityApplicationControlProfileNetworkProtocolsToTerraform(struct?: DataFortisaseSecurityApplicationControlProfileNetworkProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    port: cdktf.numberToTerraform(struct!.port),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataFortisaseSecurityApplicationControlProfileNetworkProtocolsToHclTerraform(struct?: DataFortisaseSecurityApplicationControlProfileNetworkProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityApplicationControlProfileNetworkProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityApplicationControlProfileNetworkProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityApplicationControlProfileNetworkProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._port = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._port = value.port;
      this._services = value.services;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}

export class DataFortisaseSecurityApplicationControlProfileNetworkProtocolsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityApplicationControlProfileNetworkProtocols[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityApplicationControlProfileNetworkProtocolsOutputReference {
    return new DataFortisaseSecurityApplicationControlProfileNetworkProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile fortisase_security_application_control_profile}
*/
export class DataFortisaseSecurityApplicationControlProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_application_control_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityApplicationControlProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityApplicationControlProfile to import
  * @param importFromId The id of the existing DataFortisaseSecurityApplicationControlProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityApplicationControlProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_application_control_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_application_control_profile fortisase_security_application_control_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityApplicationControlProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityApplicationControlProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_application_control_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationCategoryControls.internalValue = config.applicationCategoryControls;
    this._applicationControls.internalValue = config.applicationControls;
    this._blockNonDefaultPortApplications = config.blockNonDefaultPortApplications;
    this._direction = config.direction;
    this._networkProtocolEnforcement = config.networkProtocolEnforcement;
    this._networkProtocols.internalValue = config.networkProtocols;
    this._primaryKey = config.primaryKey;
    this._unknownApplicationAction = config.unknownApplicationAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_category_controls - computed: true, optional: true, required: false
  private _applicationCategoryControls = new DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsList(this, "application_category_controls", false);
  public get applicationCategoryControls() {
    return this._applicationCategoryControls;
  }
  public putApplicationCategoryControls(value: DataFortisaseSecurityApplicationControlProfileApplicationCategoryControls[] | cdktf.IResolvable) {
    this._applicationCategoryControls.internalValue = value;
  }
  public resetApplicationCategoryControls() {
    this._applicationCategoryControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCategoryControlsInput() {
    return this._applicationCategoryControls.internalValue;
  }

  // application_controls - computed: true, optional: true, required: false
  private _applicationControls = new DataFortisaseSecurityApplicationControlProfileApplicationControlsList(this, "application_controls", false);
  public get applicationControls() {
    return this._applicationControls;
  }
  public putApplicationControls(value: DataFortisaseSecurityApplicationControlProfileApplicationControls[] | cdktf.IResolvable) {
    this._applicationControls.internalValue = value;
  }
  public resetApplicationControls() {
    this._applicationControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationControlsInput() {
    return this._applicationControls.internalValue;
  }

  // block_non_default_port_applications - computed: true, optional: true, required: false
  private _blockNonDefaultPortApplications?: string; 
  public get blockNonDefaultPortApplications() {
    return this.getStringAttribute('block_non_default_port_applications');
  }
  public set blockNonDefaultPortApplications(value: string) {
    this._blockNonDefaultPortApplications = value;
  }
  public resetBlockNonDefaultPortApplications() {
    this._blockNonDefaultPortApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNonDefaultPortApplicationsInput() {
    return this._blockNonDefaultPortApplications;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // network_protocol_enforcement - computed: true, optional: true, required: false
  private _networkProtocolEnforcement?: string; 
  public get networkProtocolEnforcement() {
    return this.getStringAttribute('network_protocol_enforcement');
  }
  public set networkProtocolEnforcement(value: string) {
    this._networkProtocolEnforcement = value;
  }
  public resetNetworkProtocolEnforcement() {
    this._networkProtocolEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolEnforcementInput() {
    return this._networkProtocolEnforcement;
  }

  // network_protocols - computed: true, optional: true, required: false
  private _networkProtocols = new DataFortisaseSecurityApplicationControlProfileNetworkProtocolsList(this, "network_protocols", false);
  public get networkProtocols() {
    return this._networkProtocols;
  }
  public putNetworkProtocols(value: DataFortisaseSecurityApplicationControlProfileNetworkProtocols[] | cdktf.IResolvable) {
    this._networkProtocols.internalValue = value;
  }
  public resetNetworkProtocols() {
    this._networkProtocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolsInput() {
    return this._networkProtocols.internalValue;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // unknown_application_action - computed: true, optional: true, required: false
  private _unknownApplicationAction?: string; 
  public get unknownApplicationAction() {
    return this.getStringAttribute('unknown_application_action');
  }
  public set unknownApplicationAction(value: string) {
    this._unknownApplicationAction = value;
  }
  public resetUnknownApplicationAction() {
    this._unknownApplicationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownApplicationActionInput() {
    return this._unknownApplicationAction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_category_controls: cdktf.listMapper(dataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsToTerraform, false)(this._applicationCategoryControls.internalValue),
      application_controls: cdktf.listMapper(dataFortisaseSecurityApplicationControlProfileApplicationControlsToTerraform, false)(this._applicationControls.internalValue),
      block_non_default_port_applications: cdktf.stringToTerraform(this._blockNonDefaultPortApplications),
      direction: cdktf.stringToTerraform(this._direction),
      network_protocol_enforcement: cdktf.stringToTerraform(this._networkProtocolEnforcement),
      network_protocols: cdktf.listMapper(dataFortisaseSecurityApplicationControlProfileNetworkProtocolsToTerraform, false)(this._networkProtocols.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      unknown_application_action: cdktf.stringToTerraform(this._unknownApplicationAction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_category_controls: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsToHclTerraform, false)(this._applicationCategoryControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityApplicationControlProfileApplicationCategoryControlsList",
      },
      application_controls: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityApplicationControlProfileApplicationControlsToHclTerraform, false)(this._applicationControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityApplicationControlProfileApplicationControlsList",
      },
      block_non_default_port_applications: {
        value: cdktf.stringToHclTerraform(this._blockNonDefaultPortApplications),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_protocol_enforcement: {
        value: cdktf.stringToHclTerraform(this._networkProtocolEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_protocols: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityApplicationControlProfileNetworkProtocolsToHclTerraform, false)(this._networkProtocols.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityApplicationControlProfileNetworkProtocolsList",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_application_action: {
        value: cdktf.stringToHclTerraform(this._unknownApplicationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
