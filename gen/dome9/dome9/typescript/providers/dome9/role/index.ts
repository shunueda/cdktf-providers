// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#create Role#create}
  */
  readonly create?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#cross_account_access Role#cross_account_access}
  */
  readonly crossAccountAccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#description Role#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#id Role#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#permit_alert_actions Role#permit_alert_actions}
  */
  readonly permitAlertActions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#permit_notifications Role#permit_notifications}
  */
  readonly permitNotifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#permit_on_boarding Role#permit_on_boarding}
  */
  readonly permitOnBoarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#permit_policies Role#permit_policies}
  */
  readonly permitPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#permit_rulesets Role#permit_rulesets}
  */
  readonly permitRulesets?: boolean | cdktf.IResolvable;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#access Role#access}
  */
  readonly access?: RoleAccess[] | cdktf.IResolvable;
  /**
  * manage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#manage Role#manage}
  */
  readonly manage?: RoleManage[] | cdktf.IResolvable;
  /**
  * view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#view Role#view}
  */
  readonly view?: RoleView[] | cdktf.IResolvable;
}
export interface RoleAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#main_id Role#main_id}
  */
  readonly mainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#region Role#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#security_group_id Role#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#traffic Role#traffic}
  */
  readonly traffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#type Role#type}
  */
  readonly type?: string;
}

export function roleAccessToTerraform(struct?: RoleAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_id: cdktf.stringToTerraform(struct!.mainId),
    region: cdktf.stringToTerraform(struct!.region),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    traffic: cdktf.stringToTerraform(struct!.traffic),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function roleAccessToHclTerraform(struct?: RoleAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_id: {
      value: cdktf.stringToHclTerraform(struct!.mainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic: {
      value: cdktf.stringToHclTerraform(struct!.traffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainId = this._mainId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainId = undefined;
      this._region = undefined;
      this._securityGroupId = undefined;
      this._traffic = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainId = value.mainId;
      this._region = value.region;
      this._securityGroupId = value.securityGroupId;
      this._traffic = value.traffic;
      this._type = value.type;
    }
  }

  // main_id - computed: false, optional: true, required: false
  private _mainId?: string; 
  public get mainId() {
    return this.getStringAttribute('main_id');
  }
  public set mainId(value: string) {
    this._mainId = value;
  }
  public resetMainId() {
    this._mainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainIdInput() {
    return this._mainId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class RoleAccessList extends cdktf.ComplexList {
  public internalValue? : RoleAccess[] | cdktf.IResolvable

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
  public get(index: number): RoleAccessOutputReference {
    return new RoleAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleManage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#main_id Role#main_id}
  */
  readonly mainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#region Role#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#security_group_id Role#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#traffic Role#traffic}
  */
  readonly traffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#type Role#type}
  */
  readonly type?: string;
}

export function roleManageToTerraform(struct?: RoleManage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_id: cdktf.stringToTerraform(struct!.mainId),
    region: cdktf.stringToTerraform(struct!.region),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    traffic: cdktf.stringToTerraform(struct!.traffic),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function roleManageToHclTerraform(struct?: RoleManage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_id: {
      value: cdktf.stringToHclTerraform(struct!.mainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic: {
      value: cdktf.stringToHclTerraform(struct!.traffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleManage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainId = this._mainId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainId = undefined;
      this._region = undefined;
      this._securityGroupId = undefined;
      this._traffic = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainId = value.mainId;
      this._region = value.region;
      this._securityGroupId = value.securityGroupId;
      this._traffic = value.traffic;
      this._type = value.type;
    }
  }

  // main_id - computed: false, optional: true, required: false
  private _mainId?: string; 
  public get mainId() {
    return this.getStringAttribute('main_id');
  }
  public set mainId(value: string) {
    this._mainId = value;
  }
  public resetMainId() {
    this._mainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainIdInput() {
    return this._mainId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class RoleManageList extends cdktf.ComplexList {
  public internalValue? : RoleManage[] | cdktf.IResolvable

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
  public get(index: number): RoleManageOutputReference {
    return new RoleManageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleView {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#main_id Role#main_id}
  */
  readonly mainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#region Role#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#security_group_id Role#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#traffic Role#traffic}
  */
  readonly traffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#type Role#type}
  */
  readonly type?: string;
}

export function roleViewToTerraform(struct?: RoleView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_id: cdktf.stringToTerraform(struct!.mainId),
    region: cdktf.stringToTerraform(struct!.region),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    traffic: cdktf.stringToTerraform(struct!.traffic),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function roleViewToHclTerraform(struct?: RoleView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_id: {
      value: cdktf.stringToHclTerraform(struct!.mainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic: {
      value: cdktf.stringToHclTerraform(struct!.traffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleViewOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleView | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainId = this._mainId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleView | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainId = undefined;
      this._region = undefined;
      this._securityGroupId = undefined;
      this._traffic = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainId = value.mainId;
      this._region = value.region;
      this._securityGroupId = value.securityGroupId;
      this._traffic = value.traffic;
      this._type = value.type;
    }
  }

  // main_id - computed: false, optional: true, required: false
  private _mainId?: string; 
  public get mainId() {
    return this.getStringAttribute('main_id');
  }
  public set mainId(value: string) {
    this._mainId = value;
  }
  public resetMainId() {
    this._mainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainIdInput() {
    return this._mainId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class RoleViewList extends cdktf.ComplexList {
  public internalValue? : RoleView[] | cdktf.IResolvable

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
  public get(index: number): RoleViewOutputReference {
    return new RoleViewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role dome9_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/role dome9_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_role',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4',
        providerVersionConstraint: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._create = config.create;
    this._crossAccountAccess = config.crossAccountAccess;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._permitAlertActions = config.permitAlertActions;
    this._permitNotifications = config.permitNotifications;
    this._permitOnBoarding = config.permitOnBoarding;
    this._permitPolicies = config.permitPolicies;
    this._permitRulesets = config.permitRulesets;
    this._access.internalValue = config.access;
    this._manage.internalValue = config.manage;
    this._view.internalValue = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create - computed: false, optional: true, required: false
  private _create?: string[]; 
  public get create() {
    return this.getListAttribute('create');
  }
  public set create(value: string[]) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // cross_account_access - computed: false, optional: true, required: false
  private _crossAccountAccess?: string[]; 
  public get crossAccountAccess() {
    return this.getListAttribute('cross_account_access');
  }
  public set crossAccountAccess(value: string[]) {
    this._crossAccountAccess = value;
  }
  public resetCrossAccountAccess() {
    this._crossAccountAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountAccessInput() {
    return this._crossAccountAccess;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // permit_alert_actions - computed: false, optional: true, required: false
  private _permitAlertActions?: boolean | cdktf.IResolvable; 
  public get permitAlertActions() {
    return this.getBooleanAttribute('permit_alert_actions');
  }
  public set permitAlertActions(value: boolean | cdktf.IResolvable) {
    this._permitAlertActions = value;
  }
  public resetPermitAlertActions() {
    this._permitAlertActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitAlertActionsInput() {
    return this._permitAlertActions;
  }

  // permit_notifications - computed: false, optional: true, required: false
  private _permitNotifications?: boolean | cdktf.IResolvable; 
  public get permitNotifications() {
    return this.getBooleanAttribute('permit_notifications');
  }
  public set permitNotifications(value: boolean | cdktf.IResolvable) {
    this._permitNotifications = value;
  }
  public resetPermitNotifications() {
    this._permitNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNotificationsInput() {
    return this._permitNotifications;
  }

  // permit_on_boarding - computed: false, optional: true, required: false
  private _permitOnBoarding?: boolean | cdktf.IResolvable; 
  public get permitOnBoarding() {
    return this.getBooleanAttribute('permit_on_boarding');
  }
  public set permitOnBoarding(value: boolean | cdktf.IResolvable) {
    this._permitOnBoarding = value;
  }
  public resetPermitOnBoarding() {
    this._permitOnBoarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitOnBoardingInput() {
    return this._permitOnBoarding;
  }

  // permit_policies - computed: false, optional: true, required: false
  private _permitPolicies?: boolean | cdktf.IResolvable; 
  public get permitPolicies() {
    return this.getBooleanAttribute('permit_policies');
  }
  public set permitPolicies(value: boolean | cdktf.IResolvable) {
    this._permitPolicies = value;
  }
  public resetPermitPolicies() {
    this._permitPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPoliciesInput() {
    return this._permitPolicies;
  }

  // permit_rulesets - computed: false, optional: true, required: false
  private _permitRulesets?: boolean | cdktf.IResolvable; 
  public get permitRulesets() {
    return this.getBooleanAttribute('permit_rulesets');
  }
  public set permitRulesets(value: boolean | cdktf.IResolvable) {
    this._permitRulesets = value;
  }
  public resetPermitRulesets() {
    this._permitRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitRulesetsInput() {
    return this._permitRulesets;
  }

  // access - computed: false, optional: true, required: false
  private _access = new RoleAccessList(this, "access", false);
  public get access() {
    return this._access;
  }
  public putAccess(value: RoleAccess[] | cdktf.IResolvable) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // manage - computed: false, optional: true, required: false
  private _manage = new RoleManageList(this, "manage", false);
  public get manage() {
    return this._manage;
  }
  public putManage(value: RoleManage[] | cdktf.IResolvable) {
    this._manage.internalValue = value;
  }
  public resetManage() {
    this._manage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageInput() {
    return this._manage.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view = new RoleViewList(this, "view", false);
  public get view() {
    return this._view;
  }
  public putView(value: RoleView[] | cdktf.IResolvable) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create: cdktf.listMapper(cdktf.stringToTerraform, false)(this._create),
      cross_account_access: cdktf.listMapper(cdktf.stringToTerraform, false)(this._crossAccountAccess),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permit_alert_actions: cdktf.booleanToTerraform(this._permitAlertActions),
      permit_notifications: cdktf.booleanToTerraform(this._permitNotifications),
      permit_on_boarding: cdktf.booleanToTerraform(this._permitOnBoarding),
      permit_policies: cdktf.booleanToTerraform(this._permitPolicies),
      permit_rulesets: cdktf.booleanToTerraform(this._permitRulesets),
      access: cdktf.listMapper(roleAccessToTerraform, true)(this._access.internalValue),
      manage: cdktf.listMapper(roleManageToTerraform, true)(this._manage.internalValue),
      view: cdktf.listMapper(roleViewToTerraform, true)(this._view.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._create),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cross_account_access: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._crossAccountAccess),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_alert_actions: {
        value: cdktf.booleanToHclTerraform(this._permitAlertActions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permit_notifications: {
        value: cdktf.booleanToHclTerraform(this._permitNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permit_on_boarding: {
        value: cdktf.booleanToHclTerraform(this._permitOnBoarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permit_policies: {
        value: cdktf.booleanToHclTerraform(this._permitPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permit_rulesets: {
        value: cdktf.booleanToHclTerraform(this._permitRulesets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access: {
        value: cdktf.listMapperHcl(roleAccessToHclTerraform, true)(this._access.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleAccessList",
      },
      manage: {
        value: cdktf.listMapperHcl(roleManageToHclTerraform, true)(this._manage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleManageList",
      },
      view: {
        value: cdktf.listMapperHcl(roleViewToHclTerraform, true)(this._view.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleViewList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
