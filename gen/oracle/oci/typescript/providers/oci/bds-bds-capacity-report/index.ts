// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BdsBdsCapacityReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#compartment_id BdsBdsCapacityReport#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#id BdsBdsCapacityReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * shape_availabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#shape_availabilities BdsBdsCapacityReport#shape_availabilities}
  */
  readonly shapeAvailabilities: BdsBdsCapacityReportShapeAvailabilities[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#timeouts BdsBdsCapacityReport#timeouts}
  */
  readonly timeouts?: BdsBdsCapacityReportTimeouts;
}
export interface BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailability {
}

export function bdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailabilityToTerraform(struct?: BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailabilityToHclTerraform(struct?: BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_status - computed: true, optional: false, required: false
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }

  // available_count - computed: true, optional: false, required: false
  public get availableCount() {
    return this.getStringAttribute('available_count');
  }
}

export class BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailabilityList extends cdktf.ComplexList {

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
  public get(index: number): BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailabilityOutputReference {
    return new BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReports {
}

export function bdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsToTerraform(struct?: BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsToHclTerraform(struct?: BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_availability - computed: true, optional: false, required: false
  private _capacityAvailability = new BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsCapacityAvailabilityList(this, "capacity_availability", false);
  public get capacityAvailability() {
    return this._capacityAvailability;
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
}

export class BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsList extends cdktf.ComplexList {

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
  public get(index: number): BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsOutputReference {
    return new BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsCapacityReportShapeAvailabilitiesShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#memory_in_gbs BdsBdsCapacityReport#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#nvmes BdsBdsCapacityReport#nvmes}
  */
  readonly nvmes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#ocpus BdsBdsCapacityReport#ocpus}
  */
  readonly ocpus?: number;
}

export function bdsBdsCapacityReportShapeAvailabilitiesShapeConfigToTerraform(struct?: BdsBdsCapacityReportShapeAvailabilitiesShapeConfigOutputReference | BdsBdsCapacityReportShapeAvailabilitiesShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    nvmes: cdktf.numberToTerraform(struct!.nvmes),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function bdsBdsCapacityReportShapeAvailabilitiesShapeConfigToHclTerraform(struct?: BdsBdsCapacityReportShapeAvailabilitiesShapeConfigOutputReference | BdsBdsCapacityReportShapeAvailabilitiesShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvmes: {
      value: cdktf.numberToHclTerraform(struct!.nvmes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsCapacityReportShapeAvailabilitiesShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BdsBdsCapacityReportShapeAvailabilitiesShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._nvmes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmes = this._nvmes;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsCapacityReportShapeAvailabilitiesShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._nvmes = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._nvmes = value.nvmes;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // nvmes - computed: true, optional: true, required: false
  private _nvmes?: number; 
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }
  public set nvmes(value: number) {
    this._nvmes = value;
  }
  public resetNvmes() {
    this._nvmes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmesInput() {
    return this._nvmes;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface BdsBdsCapacityReportShapeAvailabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#shape BdsBdsCapacityReport#shape}
  */
  readonly shape: string;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#shape_config BdsBdsCapacityReport#shape_config}
  */
  readonly shapeConfig?: BdsBdsCapacityReportShapeAvailabilitiesShapeConfig;
}

export function bdsBdsCapacityReportShapeAvailabilitiesToTerraform(struct?: BdsBdsCapacityReportShapeAvailabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shape: cdktf.stringToTerraform(struct!.shape),
    shape_config: bdsBdsCapacityReportShapeAvailabilitiesShapeConfigToTerraform(struct!.shapeConfig),
  }
}


export function bdsBdsCapacityReportShapeAvailabilitiesToHclTerraform(struct?: BdsBdsCapacityReportShapeAvailabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_config: {
      value: bdsBdsCapacityReportShapeAvailabilitiesShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BdsBdsCapacityReportShapeAvailabilitiesShapeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BdsBdsCapacityReportShapeAvailabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BdsBdsCapacityReportShapeAvailabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BdsBdsCapacityReportShapeAvailabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shape = undefined;
      this._shapeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shape = value.shape;
      this._shapeConfig.internalValue = value.shapeConfig;
    }
  }

  // domain_level_capacity_reports - computed: true, optional: false, required: false
  private _domainLevelCapacityReports = new BdsBdsCapacityReportShapeAvailabilitiesDomainLevelCapacityReportsList(this, "domain_level_capacity_reports", false);
  public get domainLevelCapacityReports() {
    return this._domainLevelCapacityReports;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new BdsBdsCapacityReportShapeAvailabilitiesShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: BdsBdsCapacityReportShapeAvailabilitiesShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }
}

export class BdsBdsCapacityReportShapeAvailabilitiesList extends cdktf.ComplexList {
  public internalValue? : BdsBdsCapacityReportShapeAvailabilities[] | cdktf.IResolvable

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
  public get(index: number): BdsBdsCapacityReportShapeAvailabilitiesOutputReference {
    return new BdsBdsCapacityReportShapeAvailabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BdsBdsCapacityReportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#create BdsBdsCapacityReport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#delete BdsBdsCapacityReport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#update BdsBdsCapacityReport#update}
  */
  readonly update?: string;
}

export function bdsBdsCapacityReportTimeoutsToTerraform(struct?: BdsBdsCapacityReportTimeouts | cdktf.IResolvable): any {
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


export function bdsBdsCapacityReportTimeoutsToHclTerraform(struct?: BdsBdsCapacityReportTimeouts | cdktf.IResolvable): any {
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

export class BdsBdsCapacityReportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BdsBdsCapacityReportTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BdsBdsCapacityReportTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report oci_bds_bds_capacity_report}
*/
export class BdsBdsCapacityReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_capacity_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BdsBdsCapacityReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BdsBdsCapacityReport to import
  * @param importFromId The id of the existing BdsBdsCapacityReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BdsBdsCapacityReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_capacity_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/bds_bds_capacity_report oci_bds_bds_capacity_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BdsBdsCapacityReportConfig
  */
  public constructor(scope: Construct, id: string, config: BdsBdsCapacityReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_capacity_report',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._id = config.id;
    this._shapeAvailabilities.internalValue = config.shapeAvailabilities;
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // shape_availabilities - computed: false, optional: false, required: true
  private _shapeAvailabilities = new BdsBdsCapacityReportShapeAvailabilitiesList(this, "shape_availabilities", false);
  public get shapeAvailabilities() {
    return this._shapeAvailabilities;
  }
  public putShapeAvailabilities(value: BdsBdsCapacityReportShapeAvailabilities[] | cdktf.IResolvable) {
    this._shapeAvailabilities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAvailabilitiesInput() {
    return this._shapeAvailabilities.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BdsBdsCapacityReportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BdsBdsCapacityReportTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      shape_availabilities: cdktf.listMapper(bdsBdsCapacityReportShapeAvailabilitiesToTerraform, true)(this._shapeAvailabilities.internalValue),
      timeouts: bdsBdsCapacityReportTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shape_availabilities: {
        value: cdktf.listMapperHcl(bdsBdsCapacityReportShapeAvailabilitiesToHclTerraform, true)(this._shapeAvailabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BdsBdsCapacityReportShapeAvailabilitiesList",
      },
      timeouts: {
        value: bdsBdsCapacityReportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BdsBdsCapacityReportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
