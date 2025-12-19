// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityFileMetricsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#id DataThunderVisibilityFileMetricsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#oper DataThunderVisibilityFileMetricsOper#oper}
  */
  readonly oper?: DataThunderVisibilityFileMetricsOperOper;
}
export interface DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#metric_attr_name DataThunderVisibilityFileMetricsOper#metric_attr_name}
  */
  readonly metricAttrName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#metric_attr_value DataThunderVisibilityFileMetricsOper#metric_attr_value}
  */
  readonly metricAttrValue?: string;
}

export function dataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStructToTerraform(struct?: DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_attr_name: cdktf.stringToTerraform(struct!.metricAttrName),
    metric_attr_value: cdktf.stringToTerraform(struct!.metricAttrValue),
  }
}


export function dataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStructToHclTerraform(struct?: DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_attr_name: {
      value: cdktf.stringToHclTerraform(struct!.metricAttrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_attr_value: {
      value: cdktf.stringToHclTerraform(struct!.metricAttrValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricAttrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricAttrName = this._metricAttrName;
    }
    if (this._metricAttrValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricAttrValue = this._metricAttrValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricAttrName = undefined;
      this._metricAttrValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricAttrName = value.metricAttrName;
      this._metricAttrValue = value.metricAttrValue;
    }
  }

  // metric_attr_name - computed: false, optional: true, required: false
  private _metricAttrName?: string; 
  public get metricAttrName() {
    return this.getStringAttribute('metric_attr_name');
  }
  public set metricAttrName(value: string) {
    this._metricAttrName = value;
  }
  public resetMetricAttrName() {
    this._metricAttrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAttrNameInput() {
    return this._metricAttrName;
  }

  // metric_attr_value - computed: false, optional: true, required: false
  private _metricAttrValue?: string; 
  public get metricAttrValue() {
    return this.getStringAttribute('metric_attr_value');
  }
  public set metricAttrValue(value: string) {
    this._metricAttrValue = value;
  }
  public resetMetricAttrValue() {
    this._metricAttrValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAttrValueInput() {
    return this._metricAttrValue;
  }
}

export class DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStructOutputReference {
    return new DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityFileMetricsOperOperProcMetricListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#metric_name DataThunderVisibilityFileMetricsOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * metric_attr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#metric_attr_list DataThunderVisibilityFileMetricsOper#metric_attr_list}
  */
  readonly metricAttrList?: DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityFileMetricsOperOperProcMetricListStructToTerraform(struct?: DataThunderVisibilityFileMetricsOperOperProcMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_attr_list: cdktf.listMapper(dataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStructToTerraform, true)(struct!.metricAttrList),
  }
}


export function dataThunderVisibilityFileMetricsOperOperProcMetricListStructToHclTerraform(struct?: DataThunderVisibilityFileMetricsOperOperProcMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_attr_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStructToHclTerraform, true)(struct!.metricAttrList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFileMetricsOperOperProcMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityFileMetricsOperOperProcMetricListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricAttrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricAttrList = this._metricAttrList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFileMetricsOperOperProcMetricListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._metricAttrList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._metricAttrList.internalValue = value.metricAttrList;
    }
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_attr_list - computed: false, optional: true, required: false
  private _metricAttrList = new DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStructList(this, "metric_attr_list", false);
  public get metricAttrList() {
    return this._metricAttrList;
  }
  public putMetricAttrList(value: DataThunderVisibilityFileMetricsOperOperProcMetricListMetricAttrListStruct[] | cdktf.IResolvable) {
    this._metricAttrList.internalValue = value;
  }
  public resetMetricAttrList() {
    this._metricAttrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAttrListInput() {
    return this._metricAttrList.internalValue;
  }
}

export class DataThunderVisibilityFileMetricsOperOperProcMetricListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityFileMetricsOperOperProcMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityFileMetricsOperOperProcMetricListStructOutputReference {
    return new DataThunderVisibilityFileMetricsOperOperProcMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityFileMetricsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#file_name DataThunderVisibilityFileMetricsOper#file_name}
  */
  readonly fileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#monitor_type DataThunderVisibilityFileMetricsOper#monitor_type}
  */
  readonly monitorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#pri_ipv4_addr DataThunderVisibilityFileMetricsOper#pri_ipv4_addr}
  */
  readonly priIpv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#pri_ipv6_addr DataThunderVisibilityFileMetricsOper#pri_ipv6_addr}
  */
  readonly priIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#pri_l4_port DataThunderVisibilityFileMetricsOper#pri_l4_port}
  */
  readonly priL4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#pri_l4_proto DataThunderVisibilityFileMetricsOper#pri_l4_proto}
  */
  readonly priL4Proto?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#pri_type DataThunderVisibilityFileMetricsOper#pri_type}
  */
  readonly priType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#sec_ipv4_addr DataThunderVisibilityFileMetricsOper#sec_ipv4_addr}
  */
  readonly secIpv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#sec_ipv6_addr DataThunderVisibilityFileMetricsOper#sec_ipv6_addr}
  */
  readonly secIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#sec_l4_port DataThunderVisibilityFileMetricsOper#sec_l4_port}
  */
  readonly secL4Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#sec_l4_proto DataThunderVisibilityFileMetricsOper#sec_l4_proto}
  */
  readonly secL4Proto?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#sec_type DataThunderVisibilityFileMetricsOper#sec_type}
  */
  readonly secType?: string;
  /**
  * proc_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#proc_metric_list DataThunderVisibilityFileMetricsOper#proc_metric_list}
  */
  readonly procMetricList?: DataThunderVisibilityFileMetricsOperOperProcMetricListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityFileMetricsOperOperToTerraform(struct?: DataThunderVisibilityFileMetricsOperOperOutputReference | DataThunderVisibilityFileMetricsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_name: cdktf.stringToTerraform(struct!.fileName),
    monitor_type: cdktf.stringToTerraform(struct!.monitorType),
    pri_ipv4_addr: cdktf.stringToTerraform(struct!.priIpv4Addr),
    pri_ipv6_addr: cdktf.stringToTerraform(struct!.priIpv6Addr),
    pri_l4_port: cdktf.numberToTerraform(struct!.priL4Port),
    pri_l4_proto: cdktf.numberToTerraform(struct!.priL4Proto),
    pri_type: cdktf.stringToTerraform(struct!.priType),
    sec_ipv4_addr: cdktf.stringToTerraform(struct!.secIpv4Addr),
    sec_ipv6_addr: cdktf.stringToTerraform(struct!.secIpv6Addr),
    sec_l4_port: cdktf.numberToTerraform(struct!.secL4Port),
    sec_l4_proto: cdktf.numberToTerraform(struct!.secL4Proto),
    sec_type: cdktf.stringToTerraform(struct!.secType),
    proc_metric_list: cdktf.listMapper(dataThunderVisibilityFileMetricsOperOperProcMetricListStructToTerraform, true)(struct!.procMetricList),
  }
}


export function dataThunderVisibilityFileMetricsOperOperToHclTerraform(struct?: DataThunderVisibilityFileMetricsOperOperOutputReference | DataThunderVisibilityFileMetricsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_type: {
      value: cdktf.stringToHclTerraform(struct!.monitorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pri_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.priIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pri_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.priIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pri_l4_port: {
      value: cdktf.numberToHclTerraform(struct!.priL4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pri_l4_proto: {
      value: cdktf.numberToHclTerraform(struct!.priL4Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pri_type: {
      value: cdktf.stringToHclTerraform(struct!.priType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sec_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.secIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sec_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.secIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sec_l4_port: {
      value: cdktf.numberToHclTerraform(struct!.secL4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec_l4_proto: {
      value: cdktf.numberToHclTerraform(struct!.secL4Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec_type: {
      value: cdktf.stringToHclTerraform(struct!.secType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proc_metric_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityFileMetricsOperOperProcMetricListStructToHclTerraform, true)(struct!.procMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityFileMetricsOperOperProcMetricListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFileMetricsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityFileMetricsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._monitorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorType = this._monitorType;
    }
    if (this._priIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.priIpv4Addr = this._priIpv4Addr;
    }
    if (this._priIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.priIpv6Addr = this._priIpv6Addr;
    }
    if (this._priL4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.priL4Port = this._priL4Port;
    }
    if (this._priL4Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.priL4Proto = this._priL4Proto;
    }
    if (this._priType !== undefined) {
      hasAnyValues = true;
      internalValueResult.priType = this._priType;
    }
    if (this._secIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.secIpv4Addr = this._secIpv4Addr;
    }
    if (this._secIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.secIpv6Addr = this._secIpv6Addr;
    }
    if (this._secL4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.secL4Port = this._secL4Port;
    }
    if (this._secL4Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.secL4Proto = this._secL4Proto;
    }
    if (this._secType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secType = this._secType;
    }
    if (this._procMetricList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMetricList = this._procMetricList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFileMetricsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileName = undefined;
      this._monitorType = undefined;
      this._priIpv4Addr = undefined;
      this._priIpv6Addr = undefined;
      this._priL4Port = undefined;
      this._priL4Proto = undefined;
      this._priType = undefined;
      this._secIpv4Addr = undefined;
      this._secIpv6Addr = undefined;
      this._secL4Port = undefined;
      this._secL4Proto = undefined;
      this._secType = undefined;
      this._procMetricList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileName = value.fileName;
      this._monitorType = value.monitorType;
      this._priIpv4Addr = value.priIpv4Addr;
      this._priIpv6Addr = value.priIpv6Addr;
      this._priL4Port = value.priL4Port;
      this._priL4Proto = value.priL4Proto;
      this._priType = value.priType;
      this._secIpv4Addr = value.secIpv4Addr;
      this._secIpv6Addr = value.secIpv6Addr;
      this._secL4Port = value.secL4Port;
      this._secL4Proto = value.secL4Proto;
      this._secType = value.secType;
      this._procMetricList.internalValue = value.procMetricList;
    }
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // monitor_type - computed: false, optional: true, required: false
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  public resetMonitorType() {
    this._monitorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
  }

  // pri_ipv4_addr - computed: false, optional: true, required: false
  private _priIpv4Addr?: string; 
  public get priIpv4Addr() {
    return this.getStringAttribute('pri_ipv4_addr');
  }
  public set priIpv4Addr(value: string) {
    this._priIpv4Addr = value;
  }
  public resetPriIpv4Addr() {
    this._priIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priIpv4AddrInput() {
    return this._priIpv4Addr;
  }

  // pri_ipv6_addr - computed: false, optional: true, required: false
  private _priIpv6Addr?: string; 
  public get priIpv6Addr() {
    return this.getStringAttribute('pri_ipv6_addr');
  }
  public set priIpv6Addr(value: string) {
    this._priIpv6Addr = value;
  }
  public resetPriIpv6Addr() {
    this._priIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priIpv6AddrInput() {
    return this._priIpv6Addr;
  }

  // pri_l4_port - computed: false, optional: true, required: false
  private _priL4Port?: number; 
  public get priL4Port() {
    return this.getNumberAttribute('pri_l4_port');
  }
  public set priL4Port(value: number) {
    this._priL4Port = value;
  }
  public resetPriL4Port() {
    this._priL4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priL4PortInput() {
    return this._priL4Port;
  }

  // pri_l4_proto - computed: false, optional: true, required: false
  private _priL4Proto?: number; 
  public get priL4Proto() {
    return this.getNumberAttribute('pri_l4_proto');
  }
  public set priL4Proto(value: number) {
    this._priL4Proto = value;
  }
  public resetPriL4Proto() {
    this._priL4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priL4ProtoInput() {
    return this._priL4Proto;
  }

  // pri_type - computed: false, optional: true, required: false
  private _priType?: string; 
  public get priType() {
    return this.getStringAttribute('pri_type');
  }
  public set priType(value: string) {
    this._priType = value;
  }
  public resetPriType() {
    this._priType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priTypeInput() {
    return this._priType;
  }

  // sec_ipv4_addr - computed: false, optional: true, required: false
  private _secIpv4Addr?: string; 
  public get secIpv4Addr() {
    return this.getStringAttribute('sec_ipv4_addr');
  }
  public set secIpv4Addr(value: string) {
    this._secIpv4Addr = value;
  }
  public resetSecIpv4Addr() {
    this._secIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secIpv4AddrInput() {
    return this._secIpv4Addr;
  }

  // sec_ipv6_addr - computed: false, optional: true, required: false
  private _secIpv6Addr?: string; 
  public get secIpv6Addr() {
    return this.getStringAttribute('sec_ipv6_addr');
  }
  public set secIpv6Addr(value: string) {
    this._secIpv6Addr = value;
  }
  public resetSecIpv6Addr() {
    this._secIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secIpv6AddrInput() {
    return this._secIpv6Addr;
  }

  // sec_l4_port - computed: false, optional: true, required: false
  private _secL4Port?: number; 
  public get secL4Port() {
    return this.getNumberAttribute('sec_l4_port');
  }
  public set secL4Port(value: number) {
    this._secL4Port = value;
  }
  public resetSecL4Port() {
    this._secL4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secL4PortInput() {
    return this._secL4Port;
  }

  // sec_l4_proto - computed: false, optional: true, required: false
  private _secL4Proto?: number; 
  public get secL4Proto() {
    return this.getNumberAttribute('sec_l4_proto');
  }
  public set secL4Proto(value: number) {
    this._secL4Proto = value;
  }
  public resetSecL4Proto() {
    this._secL4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secL4ProtoInput() {
    return this._secL4Proto;
  }

  // sec_type - computed: false, optional: true, required: false
  private _secType?: string; 
  public get secType() {
    return this.getStringAttribute('sec_type');
  }
  public set secType(value: string) {
    this._secType = value;
  }
  public resetSecType() {
    this._secType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secTypeInput() {
    return this._secType;
  }

  // proc_metric_list - computed: false, optional: true, required: false
  private _procMetricList = new DataThunderVisibilityFileMetricsOperOperProcMetricListStructList(this, "proc_metric_list", false);
  public get procMetricList() {
    return this._procMetricList;
  }
  public putProcMetricList(value: DataThunderVisibilityFileMetricsOperOperProcMetricListStruct[] | cdktf.IResolvable) {
    this._procMetricList.internalValue = value;
  }
  public resetProcMetricList() {
    this._procMetricList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMetricListInput() {
    return this._procMetricList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper thunder_visibility_file_metrics_oper}
*/
export class DataThunderVisibilityFileMetricsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_file_metrics_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityFileMetricsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityFileMetricsOper to import
  * @param importFromId The id of the existing DataThunderVisibilityFileMetricsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityFileMetricsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_file_metrics_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_file_metrics_oper thunder_visibility_file_metrics_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityFileMetricsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityFileMetricsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_file_metrics_oper',
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
  private _oper = new DataThunderVisibilityFileMetricsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityFileMetricsOperOper) {
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
      oper: dataThunderVisibilityFileMetricsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityFileMetricsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityFileMetricsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
