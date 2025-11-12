// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#id Applications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#parameters Applications#parameters}
  */
  readonly parameters?: ApplicationsParameters[] | cdktf.IResolvable;
}
export interface ApplicationsItemApplicationSet {
}

export function applicationsItemApplicationSetToTerraform(struct?: ApplicationsItemApplicationSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationsItemApplicationSetToHclTerraform(struct?: ApplicationsItemApplicationSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationsItemApplicationSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsItemApplicationSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsItemApplicationSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id_ref - computed: true, optional: false, required: false
  public get idRef() {
    return this.getStringAttribute('id_ref');
  }
}

export class ApplicationsItemApplicationSetList extends cdktf.ComplexList {

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
  public get(index: number): ApplicationsItemApplicationSetOutputReference {
    return new ApplicationsItemApplicationSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsItemIndicativeNetworkIdentity {
}

export function applicationsItemIndicativeNetworkIdentityToTerraform(struct?: ApplicationsItemIndicativeNetworkIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationsItemIndicativeNetworkIdentityToHclTerraform(struct?: ApplicationsItemIndicativeNetworkIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationsItemIndicativeNetworkIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsItemIndicativeNetworkIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsItemIndicativeNetworkIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lower_port - computed: true, optional: false, required: false
  public get lowerPort() {
    return this.getNumberAttribute('lower_port');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getStringAttribute('ports');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // upper_port - computed: true, optional: false, required: false
  public get upperPort() {
    return this.getNumberAttribute('upper_port');
  }
}

export class ApplicationsItemIndicativeNetworkIdentityList extends cdktf.ComplexList {

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
  public get(index: number): ApplicationsItemIndicativeNetworkIdentityOutputReference {
    return new ApplicationsItemIndicativeNetworkIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsItemNetworkApplications {
}

export function applicationsItemNetworkApplicationsToTerraform(struct?: ApplicationsItemNetworkApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationsItemNetworkApplicationsToHclTerraform(struct?: ApplicationsItemNetworkApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationsItemNetworkApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsItemNetworkApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsItemNetworkApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_protocol - computed: true, optional: false, required: false
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }

  // application_sub_type - computed: true, optional: false, required: false
  public get applicationSubType() {
    return this.getStringAttribute('application_sub_type');
  }

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // category_id - computed: true, optional: false, required: false
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // help_string - computed: true, optional: false, required: false
  public get helpString() {
    return this.getStringAttribute('help_string');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_conflict - computed: true, optional: false, required: false
  public get ignoreConflict() {
    return this.getStringAttribute('ignore_conflict');
  }

  // long_description - computed: true, optional: false, required: false
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // popularity - computed: true, optional: false, required: false
  public get popularity() {
    return this.getNumberAttribute('popularity');
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getNumberAttribute('rank');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // traffic_class - computed: true, optional: false, required: false
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class ApplicationsItemNetworkApplicationsList extends cdktf.ComplexList {

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
  public get(index: number): ApplicationsItemNetworkApplicationsOutputReference {
    return new ApplicationsItemNetworkApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsItemNetworkIdentity {
}

export function applicationsItemNetworkIdentityToTerraform(struct?: ApplicationsItemNetworkIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationsItemNetworkIdentityToHclTerraform(struct?: ApplicationsItemNetworkIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationsItemNetworkIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsItemNetworkIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsItemNetworkIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lower_port - computed: true, optional: false, required: false
  public get lowerPort() {
    return this.getNumberAttribute('lower_port');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getStringAttribute('ports');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // upper_port - computed: true, optional: false, required: false
  public get upperPort() {
    return this.getNumberAttribute('upper_port');
  }
}

export class ApplicationsItemNetworkIdentityList extends cdktf.ComplexList {

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
  public get(index: number): ApplicationsItemNetworkIdentityOutputReference {
    return new ApplicationsItemNetworkIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsItem {
}

export function applicationsItemToTerraform(struct?: ApplicationsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationsItemToHclTerraform(struct?: ApplicationsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_set - computed: true, optional: false, required: false
  private _applicationSet = new ApplicationsItemApplicationSetList(this, "application_set", false);
  public get applicationSet() {
    return this._applicationSet;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // indicative_network_identity - computed: true, optional: false, required: false
  private _indicativeNetworkIdentity = new ApplicationsItemIndicativeNetworkIdentityList(this, "indicative_network_identity", false);
  public get indicativeNetworkIdentity() {
    return this._indicativeNetworkIdentity;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_applications - computed: true, optional: false, required: false
  private _networkApplications = new ApplicationsItemNetworkApplicationsList(this, "network_applications", false);
  public get networkApplications() {
    return this._networkApplications;
  }

  // network_identity - computed: true, optional: false, required: false
  private _networkIdentity = new ApplicationsItemNetworkIdentityList(this, "network_identity", false);
  public get networkIdentity() {
    return this._networkIdentity;
  }
}

export class ApplicationsItemList extends cdktf.ComplexList {

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
  public get(index: number): ApplicationsItemOutputReference {
    return new ApplicationsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsParametersPayloadApplicationSet {
  /**
  * Id Ref
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#id_ref Applications#id_ref}
  */
  readonly idRef?: string;
}

export function applicationsParametersPayloadApplicationSetToTerraform(struct?: ApplicationsParametersPayloadApplicationSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_ref: cdktf.stringToTerraform(struct!.idRef),
  }
}


export function applicationsParametersPayloadApplicationSetToHclTerraform(struct?: ApplicationsParametersPayloadApplicationSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_ref: {
      value: cdktf.stringToHclTerraform(struct!.idRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsParametersPayloadApplicationSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsParametersPayloadApplicationSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRef = this._idRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsParametersPayloadApplicationSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idRef = value.idRef;
    }
  }

  // id_ref - computed: false, optional: true, required: false
  private _idRef?: string; 
  public get idRef() {
    return this.getStringAttribute('id_ref');
  }
  public set idRef(value: string) {
    this._idRef = value;
  }
  public resetIdRef() {
    this._idRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRefInput() {
    return this._idRef;
  }
}

export class ApplicationsParametersPayloadApplicationSetList extends cdktf.ComplexList {
  public internalValue? : ApplicationsParametersPayloadApplicationSet[] | cdktf.IResolvable

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
  public get(index: number): ApplicationsParametersPayloadApplicationSetOutputReference {
    return new ApplicationsParametersPayloadApplicationSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsParametersPayloadIndicativeNetworkIdentity {
  /**
  * displayName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#display_name Applications#display_name}
  */
  readonly displayName?: string;
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#id Applications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * lowerPort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#lower_port Applications#lower_port}
  */
  readonly lowerPort?: number;
  /**
  * ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#ports Applications#ports}
  */
  readonly ports?: string;
  /**
  * protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#protocol Applications#protocol}
  */
  readonly protocol?: string;
  /**
  * upperPort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#upper_port Applications#upper_port}
  */
  readonly upperPort?: number;
}

export function applicationsParametersPayloadIndicativeNetworkIdentityToTerraform(struct?: ApplicationsParametersPayloadIndicativeNetworkIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
    lower_port: cdktf.numberToTerraform(struct!.lowerPort),
    ports: cdktf.stringToTerraform(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    upper_port: cdktf.numberToTerraform(struct!.upperPort),
  }
}


export function applicationsParametersPayloadIndicativeNetworkIdentityToHclTerraform(struct?: ApplicationsParametersPayloadIndicativeNetworkIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    lower_port: {
      value: cdktf.numberToHclTerraform(struct!.lowerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upper_port: {
      value: cdktf.numberToHclTerraform(struct!.upperPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsParametersPayloadIndicativeNetworkIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsParametersPayloadIndicativeNetworkIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lowerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerPort = this._lowerPort;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._upperPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperPort = this._upperPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsParametersPayloadIndicativeNetworkIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._lowerPort = undefined;
      this._ports = undefined;
      this._protocol = undefined;
      this._upperPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
      this._lowerPort = value.lowerPort;
      this._ports = value.ports;
      this._protocol = value.protocol;
      this._upperPort = value.upperPort;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: true, required: false
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

  // lower_port - computed: false, optional: true, required: false
  private _lowerPort?: number; 
  public get lowerPort() {
    return this.getNumberAttribute('lower_port');
  }
  public set lowerPort(value: number) {
    this._lowerPort = value;
  }
  public resetLowerPort() {
    this._lowerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerPortInput() {
    return this._lowerPort;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // upper_port - computed: false, optional: true, required: false
  private _upperPort?: number; 
  public get upperPort() {
    return this.getNumberAttribute('upper_port');
  }
  public set upperPort(value: number) {
    this._upperPort = value;
  }
  public resetUpperPort() {
    this._upperPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperPortInput() {
    return this._upperPort;
  }
}

export class ApplicationsParametersPayloadIndicativeNetworkIdentityList extends cdktf.ComplexList {
  public internalValue? : ApplicationsParametersPayloadIndicativeNetworkIdentity[] | cdktf.IResolvable

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
  public get(index: number): ApplicationsParametersPayloadIndicativeNetworkIdentityOutputReference {
    return new ApplicationsParametersPayloadIndicativeNetworkIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsParametersPayloadNetworkApplications {
  /**
  * App Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#app_protocol Applications#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * Application Sub Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#application_sub_type Applications#application_sub_type}
  */
  readonly applicationSubType?: string;
  /**
  * Application Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#application_type Applications#application_type}
  */
  readonly applicationType?: string;
  /**
  * Category Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#category_id Applications#category_id}
  */
  readonly categoryId?: string;
  /**
  * Display Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#display_name Applications#display_name}
  */
  readonly displayName?: string;
  /**
  * Dscp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#dscp Applications#dscp}
  */
  readonly dscp?: string;
  /**
  * Engine Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#engine_id Applications#engine_id}
  */
  readonly engineId?: string;
  /**
  * Help String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#help_string Applications#help_string}
  */
  readonly helpString?: string;
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#id Applications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore Conflict
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#ignore_conflict Applications#ignore_conflict}
  */
  readonly ignoreConflict?: string;
  /**
  * Long Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#long_description Applications#long_description}
  */
  readonly longDescription?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#name Applications#name}
  */
  readonly name?: string;
  /**
  * Popularity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#popularity Applications#popularity}
  */
  readonly popularity?: string;
  /**
  * Rank
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#rank Applications#rank}
  */
  readonly rank?: string;
  /**
  * Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#server_name Applications#server_name}
  */
  readonly serverName?: string;
  /**
  * Traffic Class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#traffic_class Applications#traffic_class}
  */
  readonly trafficClass?: string;
  /**
  * Url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#url Applications#url}
  */
  readonly url?: string;
}

export function applicationsParametersPayloadNetworkApplicationsToTerraform(struct?: ApplicationsParametersPayloadNetworkApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    application_sub_type: cdktf.stringToTerraform(struct!.applicationSubType),
    application_type: cdktf.stringToTerraform(struct!.applicationType),
    category_id: cdktf.stringToTerraform(struct!.categoryId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    dscp: cdktf.stringToTerraform(struct!.dscp),
    engine_id: cdktf.stringToTerraform(struct!.engineId),
    help_string: cdktf.stringToTerraform(struct!.helpString),
    id: cdktf.stringToTerraform(struct!.id),
    ignore_conflict: cdktf.stringToTerraform(struct!.ignoreConflict),
    long_description: cdktf.stringToTerraform(struct!.longDescription),
    name: cdktf.stringToTerraform(struct!.name),
    popularity: cdktf.stringToTerraform(struct!.popularity),
    rank: cdktf.stringToTerraform(struct!.rank),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    traffic_class: cdktf.stringToTerraform(struct!.trafficClass),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function applicationsParametersPayloadNetworkApplicationsToHclTerraform(struct?: ApplicationsParametersPayloadNetworkApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_sub_type: {
      value: cdktf.stringToHclTerraform(struct!.applicationSubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_type: {
      value: cdktf.stringToHclTerraform(struct!.applicationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category_id: {
      value: cdktf.stringToHclTerraform(struct!.categoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp: {
      value: cdktf.stringToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_id: {
      value: cdktf.stringToHclTerraform(struct!.engineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    help_string: {
      value: cdktf.stringToHclTerraform(struct!.helpString),
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
    ignore_conflict: {
      value: cdktf.stringToHclTerraform(struct!.ignoreConflict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_description: {
      value: cdktf.stringToHclTerraform(struct!.longDescription),
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
    popularity: {
      value: cdktf.stringToHclTerraform(struct!.popularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rank: {
      value: cdktf.stringToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_class: {
      value: cdktf.stringToHclTerraform(struct!.trafficClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsParametersPayloadNetworkApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsParametersPayloadNetworkApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._applicationSubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSubType = this._applicationSubType;
    }
    if (this._applicationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationType = this._applicationType;
    }
    if (this._categoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryId = this._categoryId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._engineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineId = this._engineId;
    }
    if (this._helpString !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpString = this._helpString;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreConflict !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreConflict = this._ignoreConflict;
    }
    if (this._longDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.longDescription = this._longDescription;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._popularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.popularity = this._popularity;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._trafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClass = this._trafficClass;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsParametersPayloadNetworkApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProtocol = undefined;
      this._applicationSubType = undefined;
      this._applicationType = undefined;
      this._categoryId = undefined;
      this._displayName = undefined;
      this._dscp = undefined;
      this._engineId = undefined;
      this._helpString = undefined;
      this._id = undefined;
      this._ignoreConflict = undefined;
      this._longDescription = undefined;
      this._name = undefined;
      this._popularity = undefined;
      this._rank = undefined;
      this._serverName = undefined;
      this._trafficClass = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProtocol = value.appProtocol;
      this._applicationSubType = value.applicationSubType;
      this._applicationType = value.applicationType;
      this._categoryId = value.categoryId;
      this._displayName = value.displayName;
      this._dscp = value.dscp;
      this._engineId = value.engineId;
      this._helpString = value.helpString;
      this._id = value.id;
      this._ignoreConflict = value.ignoreConflict;
      this._longDescription = value.longDescription;
      this._name = value.name;
      this._popularity = value.popularity;
      this._rank = value.rank;
      this._serverName = value.serverName;
      this._trafficClass = value.trafficClass;
      this._url = value.url;
    }
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
  }

  // application_sub_type - computed: false, optional: true, required: false
  private _applicationSubType?: string; 
  public get applicationSubType() {
    return this.getStringAttribute('application_sub_type');
  }
  public set applicationSubType(value: string) {
    this._applicationSubType = value;
  }
  public resetApplicationSubType() {
    this._applicationSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSubTypeInput() {
    return this._applicationSubType;
  }

  // application_type - computed: false, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // category_id - computed: false, optional: true, required: false
  private _categoryId?: string; 
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }
  public set categoryId(value: string) {
    this._categoryId = value;
  }
  public resetCategoryId() {
    this._categoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdInput() {
    return this._categoryId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // engine_id - computed: false, optional: true, required: false
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // help_string - computed: false, optional: true, required: false
  private _helpString?: string; 
  public get helpString() {
    return this.getStringAttribute('help_string');
  }
  public set helpString(value: string) {
    this._helpString = value;
  }
  public resetHelpString() {
    this._helpString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpStringInput() {
    return this._helpString;
  }

  // id - computed: false, optional: true, required: false
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

  // ignore_conflict - computed: false, optional: true, required: false
  private _ignoreConflict?: string; 
  public get ignoreConflict() {
    return this.getStringAttribute('ignore_conflict');
  }
  public set ignoreConflict(value: string) {
    this._ignoreConflict = value;
  }
  public resetIgnoreConflict() {
    this._ignoreConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreConflictInput() {
    return this._ignoreConflict;
  }

  // long_description - computed: false, optional: true, required: false
  private _longDescription?: string; 
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }
  public set longDescription(value: string) {
    this._longDescription = value;
  }
  public resetLongDescription() {
    this._longDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDescriptionInput() {
    return this._longDescription;
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

  // popularity - computed: false, optional: true, required: false
  private _popularity?: string; 
  public get popularity() {
    return this.getStringAttribute('popularity');
  }
  public set popularity(value: string) {
    this._popularity = value;
  }
  public resetPopularity() {
    this._popularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popularityInput() {
    return this._popularity;
  }

  // rank - computed: false, optional: true, required: false
  private _rank?: string; 
  public get rank() {
    return this.getStringAttribute('rank');
  }
  public set rank(value: string) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: string; 
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }
  public set trafficClass(value: string) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ApplicationsParametersPayloadNetworkApplicationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationsParametersPayloadNetworkApplications[] | cdktf.IResolvable

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
  public get(index: number): ApplicationsParametersPayloadNetworkApplicationsOutputReference {
    return new ApplicationsParametersPayloadNetworkApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsParametersPayloadNetworkIdentity {
  /**
  * Display Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#display_name Applications#display_name}
  */
  readonly displayName?: string;
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#id Applications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lower Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#lower_port Applications#lower_port}
  */
  readonly lowerPort?: string;
  /**
  * Ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#ports Applications#ports}
  */
  readonly ports?: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#protocol Applications#protocol}
  */
  readonly protocol?: string;
  /**
  * Upper Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#upper_port Applications#upper_port}
  */
  readonly upperPort?: string;
}

export function applicationsParametersPayloadNetworkIdentityToTerraform(struct?: ApplicationsParametersPayloadNetworkIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
    lower_port: cdktf.stringToTerraform(struct!.lowerPort),
    ports: cdktf.stringToTerraform(struct!.ports),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    upper_port: cdktf.stringToTerraform(struct!.upperPort),
  }
}


export function applicationsParametersPayloadNetworkIdentityToHclTerraform(struct?: ApplicationsParametersPayloadNetworkIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    lower_port: {
      value: cdktf.stringToHclTerraform(struct!.lowerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.stringToHclTerraform(struct!.ports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upper_port: {
      value: cdktf.stringToHclTerraform(struct!.upperPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsParametersPayloadNetworkIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsParametersPayloadNetworkIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lowerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerPort = this._lowerPort;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._upperPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperPort = this._upperPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsParametersPayloadNetworkIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._lowerPort = undefined;
      this._ports = undefined;
      this._protocol = undefined;
      this._upperPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
      this._lowerPort = value.lowerPort;
      this._ports = value.ports;
      this._protocol = value.protocol;
      this._upperPort = value.upperPort;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: true, required: false
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

  // lower_port - computed: false, optional: true, required: false
  private _lowerPort?: string; 
  public get lowerPort() {
    return this.getStringAttribute('lower_port');
  }
  public set lowerPort(value: string) {
    this._lowerPort = value;
  }
  public resetLowerPort() {
    this._lowerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerPortInput() {
    return this._lowerPort;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string; 
  public get ports() {
    return this.getStringAttribute('ports');
  }
  public set ports(value: string) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // upper_port - computed: false, optional: true, required: false
  private _upperPort?: string; 
  public get upperPort() {
    return this.getStringAttribute('upper_port');
  }
  public set upperPort(value: string) {
    this._upperPort = value;
  }
  public resetUpperPort() {
    this._upperPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperPortInput() {
    return this._upperPort;
  }
}

export class ApplicationsParametersPayloadNetworkIdentityList extends cdktf.ComplexList {
  public internalValue? : ApplicationsParametersPayloadNetworkIdentity[] | cdktf.IResolvable

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
  public get(index: number): ApplicationsParametersPayloadNetworkIdentityOutputReference {
    return new ApplicationsParametersPayloadNetworkIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsParametersPayload {
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#id Applications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#name Applications#name}
  */
  readonly name?: string;
  /**
  * application_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#application_set Applications#application_set}
  */
  readonly applicationSet?: ApplicationsParametersPayloadApplicationSet[] | cdktf.IResolvable;
  /**
  * indicative_network_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#indicative_network_identity Applications#indicative_network_identity}
  */
  readonly indicativeNetworkIdentity?: ApplicationsParametersPayloadIndicativeNetworkIdentity[] | cdktf.IResolvable;
  /**
  * network_applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#network_applications Applications#network_applications}
  */
  readonly networkApplications?: ApplicationsParametersPayloadNetworkApplications[] | cdktf.IResolvable;
  /**
  * network_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#network_identity Applications#network_identity}
  */
  readonly networkIdentity?: ApplicationsParametersPayloadNetworkIdentity[] | cdktf.IResolvable;
}

export function applicationsParametersPayloadToTerraform(struct?: ApplicationsParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    application_set: cdktf.listMapper(applicationsParametersPayloadApplicationSetToTerraform, true)(struct!.applicationSet),
    indicative_network_identity: cdktf.listMapper(applicationsParametersPayloadIndicativeNetworkIdentityToTerraform, true)(struct!.indicativeNetworkIdentity),
    network_applications: cdktf.listMapper(applicationsParametersPayloadNetworkApplicationsToTerraform, true)(struct!.networkApplications),
    network_identity: cdktf.listMapper(applicationsParametersPayloadNetworkIdentityToTerraform, true)(struct!.networkIdentity),
  }
}


export function applicationsParametersPayloadToHclTerraform(struct?: ApplicationsParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    application_set: {
      value: cdktf.listMapperHcl(applicationsParametersPayloadApplicationSetToHclTerraform, true)(struct!.applicationSet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsParametersPayloadApplicationSetList",
    },
    indicative_network_identity: {
      value: cdktf.listMapperHcl(applicationsParametersPayloadIndicativeNetworkIdentityToHclTerraform, true)(struct!.indicativeNetworkIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsParametersPayloadIndicativeNetworkIdentityList",
    },
    network_applications: {
      value: cdktf.listMapperHcl(applicationsParametersPayloadNetworkApplicationsToHclTerraform, true)(struct!.networkApplications),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsParametersPayloadNetworkApplicationsList",
    },
    network_identity: {
      value: cdktf.listMapperHcl(applicationsParametersPayloadNetworkIdentityToHclTerraform, true)(struct!.networkIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsParametersPayloadNetworkIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._applicationSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSet = this._applicationSet?.internalValue;
    }
    if (this._indicativeNetworkIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicativeNetworkIdentity = this._indicativeNetworkIdentity?.internalValue;
    }
    if (this._networkApplications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkApplications = this._networkApplications?.internalValue;
    }
    if (this._networkIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIdentity = this._networkIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._applicationSet.internalValue = undefined;
      this._indicativeNetworkIdentity.internalValue = undefined;
      this._networkApplications.internalValue = undefined;
      this._networkIdentity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._applicationSet.internalValue = value.applicationSet;
      this._indicativeNetworkIdentity.internalValue = value.indicativeNetworkIdentity;
      this._networkApplications.internalValue = value.networkApplications;
      this._networkIdentity.internalValue = value.networkIdentity;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // application_set - computed: false, optional: true, required: false
  private _applicationSet = new ApplicationsParametersPayloadApplicationSetList(this, "application_set", false);
  public get applicationSet() {
    return this._applicationSet;
  }
  public putApplicationSet(value: ApplicationsParametersPayloadApplicationSet[] | cdktf.IResolvable) {
    this._applicationSet.internalValue = value;
  }
  public resetApplicationSet() {
    this._applicationSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSetInput() {
    return this._applicationSet.internalValue;
  }

  // indicative_network_identity - computed: false, optional: true, required: false
  private _indicativeNetworkIdentity = new ApplicationsParametersPayloadIndicativeNetworkIdentityList(this, "indicative_network_identity", false);
  public get indicativeNetworkIdentity() {
    return this._indicativeNetworkIdentity;
  }
  public putIndicativeNetworkIdentity(value: ApplicationsParametersPayloadIndicativeNetworkIdentity[] | cdktf.IResolvable) {
    this._indicativeNetworkIdentity.internalValue = value;
  }
  public resetIndicativeNetworkIdentity() {
    this._indicativeNetworkIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicativeNetworkIdentityInput() {
    return this._indicativeNetworkIdentity.internalValue;
  }

  // network_applications - computed: false, optional: true, required: false
  private _networkApplications = new ApplicationsParametersPayloadNetworkApplicationsList(this, "network_applications", false);
  public get networkApplications() {
    return this._networkApplications;
  }
  public putNetworkApplications(value: ApplicationsParametersPayloadNetworkApplications[] | cdktf.IResolvable) {
    this._networkApplications.internalValue = value;
  }
  public resetNetworkApplications() {
    this._networkApplications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkApplicationsInput() {
    return this._networkApplications.internalValue;
  }

  // network_identity - computed: false, optional: true, required: false
  private _networkIdentity = new ApplicationsParametersPayloadNetworkIdentityList(this, "network_identity", false);
  public get networkIdentity() {
    return this._networkIdentity;
  }
  public putNetworkIdentity(value: ApplicationsParametersPayloadNetworkIdentity[] | cdktf.IResolvable) {
    this._networkIdentity.internalValue = value;
  }
  public resetNetworkIdentity() {
    this._networkIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdentityInput() {
    return this._networkIdentity.internalValue;
  }
}

export class ApplicationsParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : ApplicationsParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): ApplicationsParametersPayloadOutputReference {
    return new ApplicationsParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#payload Applications#payload}
  */
  readonly payload?: ApplicationsParametersPayload[] | cdktf.IResolvable;
}

export function applicationsParametersToTerraform(struct?: ApplicationsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.listMapper(applicationsParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function applicationsParametersToHclTerraform(struct?: ApplicationsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.listMapperHcl(applicationsParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
    }
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new ApplicationsParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: ApplicationsParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

export class ApplicationsParametersList extends cdktf.ComplexList {
  public internalValue? : ApplicationsParameters[] | cdktf.IResolvable

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
  public get(index: number): ApplicationsParametersOutputReference {
    return new ApplicationsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications dnacenter_applications}
*/
export class Applications extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Applications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Applications to import
  * @param importFromId The id of the existing Applications that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Applications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/applications dnacenter_applications} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_applications',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new ApplicationsItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ApplicationsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ApplicationsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(applicationsParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(applicationsParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationsParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
