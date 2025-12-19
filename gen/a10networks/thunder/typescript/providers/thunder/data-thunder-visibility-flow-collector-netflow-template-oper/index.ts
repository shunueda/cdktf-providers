// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityFlowCollectorNetflowTemplateOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#id DataThunderVisibilityFlowCollectorNetflowTemplateOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#detail DataThunderVisibilityFlowCollectorNetflowTemplateOper#detail}
  */
  readonly detail?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetail;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#oper DataThunderVisibilityFlowCollectorNetflowTemplateOper#oper}
  */
  readonly oper?: DataThunderVisibilityFlowCollectorNetflowTemplateOperOper;
}
export interface DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#enterprise_field DataThunderVisibilityFlowCollectorNetflowTemplateOper#enterprise_field}
  */
  readonly enterpriseField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#id1 DataThunderVisibilityFlowCollectorNetflowTemplateOper#id1}
  */
  readonly id1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#length DataThunderVisibilityFlowCollectorNetflowTemplateOper#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#variable_length DataThunderVisibilityFlowCollectorNetflowTemplateOper#variable_length}
  */
  readonly variableLength?: string;
}

export function dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStructToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStruct | cdktf.IResolvable): any {
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


export function dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStructToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStruct | cdktf.IResolvable): any {
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

export class DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStructOutputReference {
    return new DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#exporter_address DataThunderVisibilityFlowCollectorNetflowTemplateOper#exporter_address}
  */
  readonly exporterAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#field_count DataThunderVisibilityFlowCollectorNetflowTemplateOper#field_count}
  */
  readonly fieldCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#nflow_version DataThunderVisibilityFlowCollectorNetflowTemplateOper#nflow_version}
  */
  readonly nflowVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#observation_domain_id DataThunderVisibilityFlowCollectorNetflowTemplateOper#observation_domain_id}
  */
  readonly observationDomainId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#partition_id DataThunderVisibilityFlowCollectorNetflowTemplateOper#partition_id}
  */
  readonly partitionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#seconds_to_expire DataThunderVisibilityFlowCollectorNetflowTemplateOper#seconds_to_expire}
  */
  readonly secondsToExpire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#template_id DataThunderVisibilityFlowCollectorNetflowTemplateOper#template_id}
  */
  readonly templateId?: number;
  /**
  * template_field_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#template_field_list DataThunderVisibilityFlowCollectorNetflowTemplateOper#template_field_list}
  */
  readonly templateFieldList?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStructToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStruct | cdktf.IResolvable): any {
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
    template_field_list: cdktf.listMapper(dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStructToTerraform, true)(struct!.templateFieldList),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStructToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStructToHclTerraform, true)(struct!.templateFieldList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStruct | cdktf.IResolvable | undefined) {
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
  private _templateFieldList = new DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStructList(this, "template_field_list", false);
  public get templateFieldList() {
    return this._templateFieldList;
  }
  public putTemplateFieldList(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListTemplateFieldListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStructOutputReference {
    return new DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOper {
  /**
  * nf_template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#nf_template_list DataThunderVisibilityFlowCollectorNetflowTemplateOper#nf_template_list}
  */
  readonly nfTemplateList?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperOutputReference | DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nf_template_list: cdktf.listMapper(dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStructToTerraform, true)(struct!.nfTemplateList),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperOutputReference | DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nf_template_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStructToHclTerraform, true)(struct!.nfTemplateList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfTemplateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfTemplateList = this._nfTemplateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOper | undefined) {
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
  private _nfTemplateList = new DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStructList(this, "nf_template_list", false);
  public get nfTemplateList() {
    return this._nfTemplateList;
  }
  public putNfTemplateList(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperNfTemplateListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderVisibilityFlowCollectorNetflowTemplateOperDetail {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#oper DataThunderVisibilityFlowCollectorNetflowTemplateOper#oper}
  */
  readonly oper?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOper;
}

export function dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOutputReference | DataThunderVisibilityFlowCollectorNetflowTemplateOperDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOutputReference | DataThunderVisibilityFlowCollectorNetflowTemplateOperDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowTemplateOperDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#exporter_address DataThunderVisibilityFlowCollectorNetflowTemplateOper#exporter_address}
  */
  readonly exporterAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#field_count DataThunderVisibilityFlowCollectorNetflowTemplateOper#field_count}
  */
  readonly fieldCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#nflow_version DataThunderVisibilityFlowCollectorNetflowTemplateOper#nflow_version}
  */
  readonly nflowVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#observation_domain_id DataThunderVisibilityFlowCollectorNetflowTemplateOper#observation_domain_id}
  */
  readonly observationDomainId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#partition_id DataThunderVisibilityFlowCollectorNetflowTemplateOper#partition_id}
  */
  readonly partitionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#seconds_to_expire DataThunderVisibilityFlowCollectorNetflowTemplateOper#seconds_to_expire}
  */
  readonly secondsToExpire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#template_id DataThunderVisibilityFlowCollectorNetflowTemplateOper#template_id}
  */
  readonly templateId?: number;
}

export function dataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStructToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStruct | cdktf.IResolvable): any {
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
  }
}


export function dataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStructToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStruct | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStruct | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStruct | cdktf.IResolvable | undefined) {
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
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStructOutputReference {
    return new DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityFlowCollectorNetflowTemplateOperOper {
  /**
  * nf_template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#nf_template_list DataThunderVisibilityFlowCollectorNetflowTemplateOper#nf_template_list}
  */
  readonly nfTemplateList?: DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityFlowCollectorNetflowTemplateOperOperToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperOperOutputReference | DataThunderVisibilityFlowCollectorNetflowTemplateOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nf_template_list: cdktf.listMapper(dataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStructToTerraform, true)(struct!.nfTemplateList),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowTemplateOperOperToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowTemplateOperOperOutputReference | DataThunderVisibilityFlowCollectorNetflowTemplateOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nf_template_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStructToHclTerraform, true)(struct!.nfTemplateList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowTemplateOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowTemplateOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfTemplateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfTemplateList = this._nfTemplateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperOper | undefined) {
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
  private _nfTemplateList = new DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStructList(this, "nf_template_list", false);
  public get nfTemplateList() {
    return this._nfTemplateList;
  }
  public putNfTemplateList(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperOperNfTemplateListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper thunder_visibility_flow_collector_netflow_template_oper}
*/
export class DataThunderVisibilityFlowCollectorNetflowTemplateOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_flow_collector_netflow_template_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityFlowCollectorNetflowTemplateOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityFlowCollectorNetflowTemplateOper to import
  * @param importFromId The id of the existing DataThunderVisibilityFlowCollectorNetflowTemplateOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityFlowCollectorNetflowTemplateOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_flow_collector_netflow_template_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_flow_collector_netflow_template_oper thunder_visibility_flow_collector_netflow_template_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityFlowCollectorNetflowTemplateOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityFlowCollectorNetflowTemplateOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_flow_collector_netflow_template_oper',
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
    this._detail.internalValue = config.detail;
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

  // detail - computed: false, optional: true, required: false
  private _detail = new DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailOutputReference(this, "detail");
  public get detail() {
    return this._detail;
  }
  public putDetail(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperDetail) {
    this._detail.internalValue = value;
  }
  public resetDetail() {
    this._detail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityFlowCollectorNetflowTemplateOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityFlowCollectorNetflowTemplateOperOper) {
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
      detail: dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailToTerraform(this._detail.internalValue),
      oper: dataThunderVisibilityFlowCollectorNetflowTemplateOperOperToTerraform(this._oper.internalValue),
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
      detail: {
        value: dataThunderVisibilityFlowCollectorNetflowTemplateOperDetailToHclTerraform(this._detail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityFlowCollectorNetflowTemplateOperDetailList",
      },
      oper: {
        value: dataThunderVisibilityFlowCollectorNetflowTemplateOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityFlowCollectorNetflowTemplateOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
