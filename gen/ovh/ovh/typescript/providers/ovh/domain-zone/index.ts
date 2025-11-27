// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#id DomainZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ovh Subsidiary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#ovh_subsidiary DomainZone#ovh_subsidiary}
  */
  readonly ovhSubsidiary?: string;
  /**
  * Ovh payment mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#payment_mean DomainZone#payment_mean}
  */
  readonly paymentMean?: string;
  /**
  * order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#order DomainZone#order}
  */
  readonly order?: DomainZoneOrder[] | cdktf.IResolvable;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#plan DomainZone#plan}
  */
  readonly plan?: DomainZonePlan;
  /**
  * plan_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#plan_option DomainZone#plan_option}
  */
  readonly planOption?: DomainZonePlanOption[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#timeouts DomainZone#timeouts}
  */
  readonly timeouts?: DomainZoneTimeouts;
}
export interface DomainZoneOrderDetails {
}

export function domainZoneOrderDetailsToTerraform(struct?: DomainZoneOrderDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainZoneOrderDetailsToHclTerraform(struct?: DomainZoneOrderDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainZoneOrderDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainZoneOrderDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainZoneOrderDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // order_detail_id - computed: true, optional: false, required: false
  public get orderDetailId() {
    return this.getNumberAttribute('order_detail_id');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getStringAttribute('quantity');
  }
}

export class DomainZoneOrderDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DomainZoneOrderDetailsOutputReference {
    return new DomainZoneOrderDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainZoneOrder {
}

export function domainZoneOrderToTerraform(struct?: DomainZoneOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainZoneOrderToHclTerraform(struct?: DomainZoneOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainZoneOrderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainZoneOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainZoneOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // details - computed: true, optional: false, required: false
  private _details = new DomainZoneOrderDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }
}

export class DomainZoneOrderList extends cdktf.ComplexList {
  public internalValue? : DomainZoneOrder[] | cdktf.IResolvable

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
  public get(index: number): DomainZoneOrderOutputReference {
    return new DomainZoneOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainZonePlanConfiguration {
  /**
  * Identifier of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#label DomainZone#label}
  */
  readonly label: string;
  /**
  * Path to the resource in API.OVH.COM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#value DomainZone#value}
  */
  readonly value: string;
}

export function domainZonePlanConfigurationToTerraform(struct?: DomainZonePlanConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function domainZonePlanConfigurationToHclTerraform(struct?: DomainZonePlanConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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

export class DomainZonePlanConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainZonePlanConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainZonePlanConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

export class DomainZonePlanConfigurationList extends cdktf.ComplexList {
  public internalValue? : DomainZonePlanConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DomainZonePlanConfigurationOutputReference {
    return new DomainZonePlanConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainZonePlan {
  /**
  * Catalog name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#catalog_name DomainZone#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#duration DomainZone#duration}
  */
  readonly duration: string;
  /**
  * Plan code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#plan_code DomainZone#plan_code}
  */
  readonly planCode: string;
  /**
  * Pricing model identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#pricing_mode DomainZone#pricing_mode}
  */
  readonly pricingMode: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#configuration DomainZone#configuration}
  */
  readonly configuration?: DomainZonePlanConfiguration[] | cdktf.IResolvable;
}

export function domainZonePlanToTerraform(struct?: DomainZonePlanOutputReference | DomainZonePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
    duration: cdktf.stringToTerraform(struct!.duration),
    plan_code: cdktf.stringToTerraform(struct!.planCode),
    pricing_mode: cdktf.stringToTerraform(struct!.pricingMode),
    configuration: cdktf.listMapper(domainZonePlanConfigurationToTerraform, true)(struct!.configuration),
  }
}


export function domainZonePlanToHclTerraform(struct?: DomainZonePlanOutputReference | DomainZonePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_code: {
      value: cdktf.stringToHclTerraform(struct!.planCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing_mode: {
      value: cdktf.stringToHclTerraform(struct!.pricingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.listMapperHcl(domainZonePlanConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "DomainZonePlanConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainZonePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainZonePlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._planCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCode = this._planCode;
    }
    if (this._pricingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingMode = this._pricingMode;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainZonePlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._duration = undefined;
      this._planCode = undefined;
      this._pricingMode = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._duration = value.duration;
      this._planCode = value.planCode;
      this._pricingMode = value.pricingMode;
      this._configuration.internalValue = value.configuration;
    }
  }

  // catalog_name - computed: false, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // plan_code - computed: false, optional: false, required: true
  private _planCode?: string; 
  public get planCode() {
    return this.getStringAttribute('plan_code');
  }
  public set planCode(value: string) {
    this._planCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planCodeInput() {
    return this._planCode;
  }

  // pricing_mode - computed: false, optional: false, required: true
  private _pricingMode?: string; 
  public get pricingMode() {
    return this.getStringAttribute('pricing_mode');
  }
  public set pricingMode(value: string) {
    this._pricingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingModeInput() {
    return this._pricingMode;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DomainZonePlanConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DomainZonePlanConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface DomainZonePlanOptionConfiguration {
  /**
  * Identifier of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#label DomainZone#label}
  */
  readonly label: string;
  /**
  * Path to the resource in API.OVH.COM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#value DomainZone#value}
  */
  readonly value: string;
}

export function domainZonePlanOptionConfigurationToTerraform(struct?: DomainZonePlanOptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function domainZonePlanOptionConfigurationToHclTerraform(struct?: DomainZonePlanOptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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

export class DomainZonePlanOptionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainZonePlanOptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainZonePlanOptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

export class DomainZonePlanOptionConfigurationList extends cdktf.ComplexList {
  public internalValue? : DomainZonePlanOptionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DomainZonePlanOptionConfigurationOutputReference {
    return new DomainZonePlanOptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainZonePlanOption {
  /**
  * Catalog name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#catalog_name DomainZone#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#duration DomainZone#duration}
  */
  readonly duration: string;
  /**
  * Plan code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#plan_code DomainZone#plan_code}
  */
  readonly planCode: string;
  /**
  * Pricing model identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#pricing_mode DomainZone#pricing_mode}
  */
  readonly pricingMode: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#configuration DomainZone#configuration}
  */
  readonly configuration?: DomainZonePlanOptionConfiguration[] | cdktf.IResolvable;
}

export function domainZonePlanOptionToTerraform(struct?: DomainZonePlanOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_name: cdktf.stringToTerraform(struct!.catalogName),
    duration: cdktf.stringToTerraform(struct!.duration),
    plan_code: cdktf.stringToTerraform(struct!.planCode),
    pricing_mode: cdktf.stringToTerraform(struct!.pricingMode),
    configuration: cdktf.listMapper(domainZonePlanOptionConfigurationToTerraform, true)(struct!.configuration),
  }
}


export function domainZonePlanOptionToHclTerraform(struct?: DomainZonePlanOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_code: {
      value: cdktf.stringToHclTerraform(struct!.planCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing_mode: {
      value: cdktf.stringToHclTerraform(struct!.pricingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.listMapperHcl(domainZonePlanOptionConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "DomainZonePlanOptionConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainZonePlanOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainZonePlanOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._planCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCode = this._planCode;
    }
    if (this._pricingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingMode = this._pricingMode;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainZonePlanOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogName = undefined;
      this._duration = undefined;
      this._planCode = undefined;
      this._pricingMode = undefined;
      this._configuration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogName = value.catalogName;
      this._duration = value.duration;
      this._planCode = value.planCode;
      this._pricingMode = value.pricingMode;
      this._configuration.internalValue = value.configuration;
    }
  }

  // catalog_name - computed: false, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // plan_code - computed: false, optional: false, required: true
  private _planCode?: string; 
  public get planCode() {
    return this.getStringAttribute('plan_code');
  }
  public set planCode(value: string) {
    this._planCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planCodeInput() {
    return this._planCode;
  }

  // pricing_mode - computed: false, optional: false, required: true
  private _pricingMode?: string; 
  public get pricingMode() {
    return this.getStringAttribute('pricing_mode');
  }
  public set pricingMode(value: string) {
    this._pricingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingModeInput() {
    return this._pricingMode;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DomainZonePlanOptionConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DomainZonePlanOptionConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}

export class DomainZonePlanOptionList extends cdktf.ComplexList {
  public internalValue? : DomainZonePlanOption[] | cdktf.IResolvable

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
  public get(index: number): DomainZonePlanOptionOutputReference {
    return new DomainZonePlanOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainZoneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#create DomainZone#create}
  */
  readonly create?: string;
}

export function domainZoneTimeoutsToTerraform(struct?: DomainZoneTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function domainZoneTimeoutsToHclTerraform(struct?: DomainZoneTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainZoneTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainZoneTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainZoneTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone ovh_domain_zone}
*/
export class DomainZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_domain_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainZone to import
  * @param importFromId The id of the existing DomainZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_domain_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/domain_zone ovh_domain_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainZoneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DomainZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ovh_domain_zone',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
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
    this._ovhSubsidiary = config.ovhSubsidiary;
    this._paymentMean = config.paymentMean;
    this._order.internalValue = config.order;
    this._plan.internalValue = config.plan;
    this._planOption.internalValue = config.planOption;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dnssec_supported - computed: true, optional: false, required: false
  public get dnssecSupported() {
    return this.getBooleanAttribute('dnssec_supported');
  }

  // has_dns_anycast - computed: true, optional: false, required: false
  public get hasDnsAnycast() {
    return this.getBooleanAttribute('has_dns_anycast');
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

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // ovh_subsidiary - computed: true, optional: true, required: false
  private _ovhSubsidiary?: string; 
  public get ovhSubsidiary() {
    return this.getStringAttribute('ovh_subsidiary');
  }
  public set ovhSubsidiary(value: string) {
    this._ovhSubsidiary = value;
  }
  public resetOvhSubsidiary() {
    this._ovhSubsidiary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovhSubsidiaryInput() {
    return this._ovhSubsidiary;
  }

  // payment_mean - computed: false, optional: true, required: false
  private _paymentMean?: string; 
  public get paymentMean() {
    return this.getStringAttribute('payment_mean');
  }
  public set paymentMean(value: string) {
    this._paymentMean = value;
  }
  public resetPaymentMean() {
    this._paymentMean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentMeanInput() {
    return this._paymentMean;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }

  // order - computed: false, optional: true, required: false
  private _order = new DomainZoneOrderList(this, "order", false);
  public get order() {
    return this._order;
  }
  public putOrder(value: DomainZoneOrder[] | cdktf.IResolvable) {
    this._order.internalValue = value;
  }
  public resetOrder() {
    this._order.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new DomainZonePlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
  public putPlan(value: DomainZonePlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // plan_option - computed: false, optional: true, required: false
  private _planOption = new DomainZonePlanOptionList(this, "plan_option", false);
  public get planOption() {
    return this._planOption;
  }
  public putPlanOption(value: DomainZonePlanOption[] | cdktf.IResolvable) {
    this._planOption.internalValue = value;
  }
  public resetPlanOption() {
    this._planOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planOptionInput() {
    return this._planOption.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DomainZoneTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DomainZoneTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      ovh_subsidiary: cdktf.stringToTerraform(this._ovhSubsidiary),
      payment_mean: cdktf.stringToTerraform(this._paymentMean),
      order: cdktf.listMapper(domainZoneOrderToTerraform, true)(this._order.internalValue),
      plan: domainZonePlanToTerraform(this._plan.internalValue),
      plan_option: cdktf.listMapper(domainZonePlanOptionToTerraform, true)(this._planOption.internalValue),
      timeouts: domainZoneTimeoutsToTerraform(this._timeouts.internalValue),
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
      ovh_subsidiary: {
        value: cdktf.stringToHclTerraform(this._ovhSubsidiary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_mean: {
        value: cdktf.stringToHclTerraform(this._paymentMean),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.listMapperHcl(domainZoneOrderToHclTerraform, true)(this._order.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainZoneOrderList",
      },
      plan: {
        value: domainZonePlanToHclTerraform(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainZonePlanList",
      },
      plan_option: {
        value: cdktf.listMapperHcl(domainZonePlanOptionToHclTerraform, true)(this._planOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainZonePlanOptionList",
      },
      timeouts: {
        value: domainZoneTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainZoneTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
