// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#id DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#oper DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#oper}
  */
  readonly oper?: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOper;
}
export interface DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#enterprise_field DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#enterprise_field}
  */
  readonly enterpriseField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#id1 DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#id1}
  */
  readonly id1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#length DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#variable_length DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#variable_length}
  */
  readonly variableLength?: string;
}

export function dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStructToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enterprise_field: cdktf.stringToTerraform(struct!.enterpriseField),
    id1: cdktf.numberToTerraform(struct!.id1),
    length: cdktf.numberToTerraform(struct!.length),
    variable_length: cdktf.stringToTerraform(struct!.variableLength),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStructToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enterprise_field: {
      value: cdktf.stringToHclTerraform(struct!.enterpriseField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    variable_length: {
      value: cdktf.stringToHclTerraform(struct!.variableLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enterpriseField !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseField = this._enterpriseField;
    }
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._variableLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableLength = this._variableLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enterpriseField = undefined;
      this._id1 = undefined;
      this._length = undefined;
      this._variableLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enterpriseField = value.enterpriseField;
      this._id1 = value.id1;
      this._length = value.length;
      this._variableLength = value.variableLength;
    }
  }

  // enterprise_field - computed: false, optional: true, required: false
  private _enterpriseField?: string; 
  public get enterpriseField() {
    return this.getStringAttribute('enterprise_field');
  }
  public set enterpriseField(value: string) {
    this._enterpriseField = value;
  }
  public resetEnterpriseField() {
    this._enterpriseField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseFieldInput() {
    return this._enterpriseField;
  }

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // variable_length - computed: false, optional: true, required: false
  private _variableLength?: string; 
  public get variableLength() {
    return this.getStringAttribute('variable_length');
  }
  public set variableLength(value: string) {
    this._variableLength = value;
  }
  public resetVariableLength() {
    this._variableLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableLengthInput() {
    return this._variableLength;
  }
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStructOutputReference {
    return new DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#exporter_address DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#exporter_address}
  */
  readonly exporterAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#field_count DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#field_count}
  */
  readonly fieldCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#nflow_version DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#nflow_version}
  */
  readonly nflowVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#observation_domain_id DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#observation_domain_id}
  */
  readonly observationDomainId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#partition_id DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#partition_id}
  */
  readonly partitionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#seconds_to_expire DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#seconds_to_expire}
  */
  readonly secondsToExpire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#template_id DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#template_id}
  */
  readonly templateId?: number;
  /**
  * template_field_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#template_field_list DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#template_field_list}
  */
  readonly templateFieldList?: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStructToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exporter_address: cdktf.stringToTerraform(struct!.exporterAddress),
    field_count: cdktf.numberToTerraform(struct!.fieldCount),
    nflow_version: cdktf.numberToTerraform(struct!.nflowVersion),
    observation_domain_id: cdktf.numberToTerraform(struct!.observationDomainId),
    partition_id: cdktf.numberToTerraform(struct!.partitionId),
    seconds_to_expire: cdktf.numberToTerraform(struct!.secondsToExpire),
    template_id: cdktf.numberToTerraform(struct!.templateId),
    template_field_list: cdktf.listMapper(dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStructToTerraform, true)(struct!.templateFieldList),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStructToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exporter_address: {
      value: cdktf.stringToHclTerraform(struct!.exporterAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_count: {
      value: cdktf.numberToHclTerraform(struct!.fieldCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nflow_version: {
      value: cdktf.numberToHclTerraform(struct!.nflowVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    observation_domain_id: {
      value: cdktf.numberToHclTerraform(struct!.observationDomainId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_id: {
      value: cdktf.numberToHclTerraform(struct!.partitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds_to_expire: {
      value: cdktf.numberToHclTerraform(struct!.secondsToExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_id: {
      value: cdktf.numberToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_field_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStructToHclTerraform, true)(struct!.templateFieldList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exporterAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.exporterAddress = this._exporterAddress;
    }
    if (this._fieldCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldCount = this._fieldCount;
    }
    if (this._nflowVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nflowVersion = this._nflowVersion;
    }
    if (this._observationDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.observationDomainId = this._observationDomainId;
    }
    if (this._partitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionId = this._partitionId;
    }
    if (this._secondsToExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondsToExpire = this._secondsToExpire;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._templateFieldList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateFieldList = this._templateFieldList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exporterAddress = undefined;
      this._fieldCount = undefined;
      this._nflowVersion = undefined;
      this._observationDomainId = undefined;
      this._partitionId = undefined;
      this._secondsToExpire = undefined;
      this._templateId = undefined;
      this._templateFieldList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exporterAddress = value.exporterAddress;
      this._fieldCount = value.fieldCount;
      this._nflowVersion = value.nflowVersion;
      this._observationDomainId = value.observationDomainId;
      this._partitionId = value.partitionId;
      this._secondsToExpire = value.secondsToExpire;
      this._templateId = value.templateId;
      this._templateFieldList.internalValue = value.templateFieldList;
    }
  }

  // exporter_address - computed: false, optional: true, required: false
  private _exporterAddress?: string; 
  public get exporterAddress() {
    return this.getStringAttribute('exporter_address');
  }
  public set exporterAddress(value: string) {
    this._exporterAddress = value;
  }
  public resetExporterAddress() {
    this._exporterAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exporterAddressInput() {
    return this._exporterAddress;
  }

  // field_count - computed: false, optional: true, required: false
  private _fieldCount?: number; 
  public get fieldCount() {
    return this.getNumberAttribute('field_count');
  }
  public set fieldCount(value: number) {
    this._fieldCount = value;
  }
  public resetFieldCount() {
    this._fieldCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldCountInput() {
    return this._fieldCount;
  }

  // nflow_version - computed: false, optional: true, required: false
  private _nflowVersion?: number; 
  public get nflowVersion() {
    return this.getNumberAttribute('nflow_version');
  }
  public set nflowVersion(value: number) {
    this._nflowVersion = value;
  }
  public resetNflowVersion() {
    this._nflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nflowVersionInput() {
    return this._nflowVersion;
  }

  // observation_domain_id - computed: false, optional: true, required: false
  private _observationDomainId?: number; 
  public get observationDomainId() {
    return this.getNumberAttribute('observation_domain_id');
  }
  public set observationDomainId(value: number) {
    this._observationDomainId = value;
  }
  public resetObservationDomainId() {
    this._observationDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observationDomainIdInput() {
    return this._observationDomainId;
  }

  // partition_id - computed: false, optional: true, required: false
  private _partitionId?: number; 
  public get partitionId() {
    return this.getNumberAttribute('partition_id');
  }
  public set partitionId(value: number) {
    this._partitionId = value;
  }
  public resetPartitionId() {
    this._partitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIdInput() {
    return this._partitionId;
  }

  // seconds_to_expire - computed: false, optional: true, required: false
  private _secondsToExpire?: number; 
  public get secondsToExpire() {
    return this.getNumberAttribute('seconds_to_expire');
  }
  public set secondsToExpire(value: number) {
    this._secondsToExpire = value;
  }
  public resetSecondsToExpire() {
    this._secondsToExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsToExpireInput() {
    return this._secondsToExpire;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: number; 
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
  public set templateId(value: number) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_field_list - computed: false, optional: true, required: false
  private _templateFieldList = new DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStructList(this, "template_field_list", false);
  public get templateFieldList() {
    return this._templateFieldList;
  }
  public putTemplateFieldList(value: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListTemplateFieldListStruct[] | cdktf.IResolvable) {
    this._templateFieldList.internalValue = value;
  }
  public resetTemplateFieldList() {
    this._templateFieldList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFieldListInput() {
    return this._templateFieldList.internalValue;
  }
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStructOutputReference {
    return new DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOper {
  /**
  * nf_template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#nf_template_list DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper#nf_template_list}
  */
  readonly nfTemplateList?: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperOutputReference | DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nf_template_list: cdktf.listMapper(dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStructToTerraform, true)(struct!.nfTemplateList),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperOutputReference | DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nf_template_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStructToHclTerraform, true)(struct!.nfTemplateList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfTemplateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfTemplateList = this._nfTemplateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nfTemplateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nfTemplateList.internalValue = value.nfTemplateList;
    }
  }

  // nf_template_list - computed: false, optional: true, required: false
  private _nfTemplateList = new DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStructList(this, "nf_template_list", false);
  public get nfTemplateList() {
    return this._nfTemplateList;
  }
  public putNfTemplateList(value: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperNfTemplateListStruct[] | cdktf.IResolvable) {
    this._nfTemplateList.internalValue = value;
  }
  public resetNfTemplateList() {
    this._nfTemplateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfTemplateListInput() {
    return this._nfTemplateList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper thunder_visibility_flow_collector_netflow_template_detail_oper}
*/
export class DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_flow_collector_netflow_template_detail_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper to import
  * @param importFromId The id of the existing DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityFlowCollectorNetflowTemplateDetailOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_flow_collector_netflow_template_detail_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_detail_oper thunder_visibility_flow_collector_netflow_template_detail_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_flow_collector_netflow_template_detail_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityFlowCollectorNetflowTemplateDetailOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
