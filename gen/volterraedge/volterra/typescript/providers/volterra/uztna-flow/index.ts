// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UztnaFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#annotations UztnaFlow#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#description UztnaFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#disable UztnaFlow#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#id UztnaFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#labels UztnaFlow#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#name UztnaFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#namespace UztnaFlow#namespace}
  */
  readonly namespace: string;
  /**
  * flow_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#flow_type UztnaFlow#flow_type}
  */
  readonly flowType: UztnaFlowFlowType;
}
export interface UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#expressions UztnaFlow#expressions}
  */
  readonly expressions: string[];
}

export function uztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelectorToTerraform(struct?: UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelectorOutputReference | UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function uztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelectorToHclTerraform(struct?: UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelectorOutputReference | UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface UztnaFlowFlowTypeGeoMatchMatchCri {
  /**
  * custom_geo_location_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#custom_geo_location_selector UztnaFlow#custom_geo_location_selector}
  */
  readonly customGeoLocationSelector?: UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelector;
}

export function uztnaFlowFlowTypeGeoMatchMatchCriToTerraform(struct?: UztnaFlowFlowTypeGeoMatchMatchCri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_geo_location_selector: uztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelectorToTerraform(struct!.customGeoLocationSelector),
  }
}


export function uztnaFlowFlowTypeGeoMatchMatchCriToHclTerraform(struct?: UztnaFlowFlowTypeGeoMatchMatchCri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_geo_location_selector: {
      value: uztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelectorToHclTerraform(struct!.customGeoLocationSelector),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeGeoMatchMatchCriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaFlowFlowTypeGeoMatchMatchCri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customGeoLocationSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGeoLocationSelector = this._customGeoLocationSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeGeoMatchMatchCri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customGeoLocationSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customGeoLocationSelector.internalValue = value.customGeoLocationSelector;
    }
  }

  // custom_geo_location_selector - computed: false, optional: true, required: false
  private _customGeoLocationSelector = new UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelectorOutputReference(this, "custom_geo_location_selector");
  public get customGeoLocationSelector() {
    return this._customGeoLocationSelector;
  }
  public putCustomGeoLocationSelector(value: UztnaFlowFlowTypeGeoMatchMatchCriCustomGeoLocationSelector) {
    this._customGeoLocationSelector.internalValue = value;
  }
  public resetCustomGeoLocationSelector() {
    this._customGeoLocationSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGeoLocationSelectorInput() {
    return this._customGeoLocationSelector.internalValue;
  }
}

export class UztnaFlowFlowTypeGeoMatchMatchCriList extends cdktf.ComplexList {
  public internalValue? : UztnaFlowFlowTypeGeoMatchMatchCri[] | cdktf.IResolvable

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
  public get(index: number): UztnaFlowFlowTypeGeoMatchMatchCriOutputReference {
    return new UztnaFlowFlowTypeGeoMatchMatchCriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaFlowFlowTypeGeoMatch {
  /**
  * match_cri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#match_cri UztnaFlow#match_cri}
  */
  readonly matchCri: UztnaFlowFlowTypeGeoMatchMatchCri[] | cdktf.IResolvable;
}

export function uztnaFlowFlowTypeGeoMatchToTerraform(struct?: UztnaFlowFlowTypeGeoMatchOutputReference | UztnaFlowFlowTypeGeoMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_cri: cdktf.listMapper(uztnaFlowFlowTypeGeoMatchMatchCriToTerraform, true)(struct!.matchCri),
  }
}


export function uztnaFlowFlowTypeGeoMatchToHclTerraform(struct?: UztnaFlowFlowTypeGeoMatchOutputReference | UztnaFlowFlowTypeGeoMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_cri: {
      value: cdktf.listMapperHcl(uztnaFlowFlowTypeGeoMatchMatchCriToHclTerraform, true)(struct!.matchCri),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeGeoMatchMatchCriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeGeoMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeGeoMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCri = this._matchCri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeGeoMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchCri.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchCri.internalValue = value.matchCri;
    }
  }

  // match_cri - computed: false, optional: false, required: true
  private _matchCri = new UztnaFlowFlowTypeGeoMatchMatchCriList(this, "match_cri", false);
  public get matchCri() {
    return this._matchCri;
  }
  public putMatchCri(value: UztnaFlowFlowTypeGeoMatchMatchCri[] | cdktf.IResolvable) {
    this._matchCri.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriInput() {
    return this._matchCri.internalValue;
  }
}
export interface UztnaFlowFlowTypeSamlMessageApplicationTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#saml_app_tag UztnaFlow#saml_app_tag}
  */
  readonly samlAppTag: string;
}

export function uztnaFlowFlowTypeSamlMessageApplicationTagToTerraform(struct?: UztnaFlowFlowTypeSamlMessageApplicationTagOutputReference | UztnaFlowFlowTypeSamlMessageApplicationTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saml_app_tag: cdktf.stringToTerraform(struct!.samlAppTag),
  }
}


export function uztnaFlowFlowTypeSamlMessageApplicationTagToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageApplicationTagOutputReference | UztnaFlowFlowTypeSamlMessageApplicationTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saml_app_tag: {
      value: cdktf.stringToHclTerraform(struct!.samlAppTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageApplicationTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageApplicationTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samlAppTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlAppTag = this._samlAppTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageApplicationTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._samlAppTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._samlAppTag = value.samlAppTag;
    }
  }

  // saml_app_tag - computed: false, optional: false, required: true
  private _samlAppTag?: string; 
  public get samlAppTag() {
    return this.getStringAttribute('saml_app_tag');
  }
  public set samlAppTag(value: string) {
    this._samlAppTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAppTagInput() {
    return this._samlAppTag;
  }
}
export interface UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#name UztnaFlow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#namespace UztnaFlow#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#tenant UztnaFlow#tenant}
  */
  readonly tenant?: string;
}

export function uztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificateToTerraform(struct?: UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function uztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificateToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificateList extends cdktf.ComplexList {
  public internalValue? : UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificate[] | cdktf.IResolvable

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
  public get(index: number): UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificateOutputReference {
    return new UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCert {
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#certificate UztnaFlow#certificate}
  */
  readonly certificate?: UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificate[] | cdktf.IResolvable;
}

export function uztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertToTerraform(struct?: UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertOutputReference | UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.listMapper(uztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificateToTerraform, true)(struct!.certificate),
  }
}


export function uztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertOutputReference | UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.listMapperHcl(uztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificateToHclTerraform, true)(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate.internalValue = value.certificate;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}
export interface UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#rsa_sha1 UztnaFlow#rsa_sha1}
  */
  readonly rsaSha1?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#rsa_sha256 UztnaFlow#rsa_sha256}
  */
  readonly rsaSha256?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#rsa_sha384 UztnaFlow#rsa_sha384}
  */
  readonly rsaSha384?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#rsa_sha512 UztnaFlow#rsa_sha512}
  */
  readonly rsaSha512?: boolean | cdktf.IResolvable;
}

export function uztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYesToTerraform(struct?: UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYesOutputReference | UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rsa_sha1: cdktf.booleanToTerraform(struct!.rsaSha1),
    rsa_sha256: cdktf.booleanToTerraform(struct!.rsaSha256),
    rsa_sha384: cdktf.booleanToTerraform(struct!.rsaSha384),
    rsa_sha512: cdktf.booleanToTerraform(struct!.rsaSha512),
  }
}


export function uztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYesToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYesOutputReference | UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rsa_sha1: {
      value: cdktf.booleanToHclTerraform(struct!.rsaSha1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rsa_sha256: {
      value: cdktf.booleanToHclTerraform(struct!.rsaSha256),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rsa_sha384: {
      value: cdktf.booleanToHclTerraform(struct!.rsaSha384),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rsa_sha512: {
      value: cdktf.booleanToHclTerraform(struct!.rsaSha512),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rsaSha1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaSha1 = this._rsaSha1;
    }
    if (this._rsaSha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaSha256 = this._rsaSha256;
    }
    if (this._rsaSha384 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaSha384 = this._rsaSha384;
    }
    if (this._rsaSha512 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaSha512 = this._rsaSha512;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rsaSha1 = undefined;
      this._rsaSha256 = undefined;
      this._rsaSha384 = undefined;
      this._rsaSha512 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rsaSha1 = value.rsaSha1;
      this._rsaSha256 = value.rsaSha256;
      this._rsaSha384 = value.rsaSha384;
      this._rsaSha512 = value.rsaSha512;
    }
  }

  // rsa_sha1 - computed: false, optional: true, required: false
  private _rsaSha1?: boolean | cdktf.IResolvable; 
  public get rsaSha1() {
    return this.getBooleanAttribute('rsa_sha1');
  }
  public set rsaSha1(value: boolean | cdktf.IResolvable) {
    this._rsaSha1 = value;
  }
  public resetRsaSha1() {
    this._rsaSha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaSha1Input() {
    return this._rsaSha1;
  }

  // rsa_sha256 - computed: false, optional: true, required: false
  private _rsaSha256?: boolean | cdktf.IResolvable; 
  public get rsaSha256() {
    return this.getBooleanAttribute('rsa_sha256');
  }
  public set rsaSha256(value: boolean | cdktf.IResolvable) {
    this._rsaSha256 = value;
  }
  public resetRsaSha256() {
    this._rsaSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaSha256Input() {
    return this._rsaSha256;
  }

  // rsa_sha384 - computed: false, optional: true, required: false
  private _rsaSha384?: boolean | cdktf.IResolvable; 
  public get rsaSha384() {
    return this.getBooleanAttribute('rsa_sha384');
  }
  public set rsaSha384(value: boolean | cdktf.IResolvable) {
    this._rsaSha384 = value;
  }
  public resetRsaSha384() {
    this._rsaSha384 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaSha384Input() {
    return this._rsaSha384;
  }

  // rsa_sha512 - computed: false, optional: true, required: false
  private _rsaSha512?: boolean | cdktf.IResolvable; 
  public get rsaSha512() {
    return this.getBooleanAttribute('rsa_sha512');
  }
  public set rsaSha512(value: boolean | cdktf.IResolvable) {
    this._rsaSha512 = value;
  }
  public resetRsaSha512() {
    this._rsaSha512 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaSha512Input() {
    return this._rsaSha512;
  }
}
export interface UztnaFlowFlowTypeSamlMessageIdpIdpSecurityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#no UztnaFlow#no}
  */
  readonly no?: boolean | cdktf.IResolvable;
  /**
  * yes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#yes UztnaFlow#yes}
  */
  readonly yes?: UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYes;
}

export function uztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyToTerraform(struct?: UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyOutputReference | UztnaFlowFlowTypeSamlMessageIdpIdpSecurityProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: cdktf.booleanToTerraform(struct!.no),
    yes: uztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYesToTerraform(struct!.yes),
  }
}


export function uztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyOutputReference | UztnaFlowFlowTypeSamlMessageIdpIdpSecurityProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: cdktf.booleanToHclTerraform(struct!.no),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    yes: {
      value: uztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageIdpIdpSecurityProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._no !== undefined) {
      hasAnyValues = true;
      internalValueResult.no = this._no;
    }
    if (this._yes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yes = this._yes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageIdpIdpSecurityProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._no = undefined;
      this._yes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._no = value.no;
      this._yes.internalValue = value.yes;
    }
  }

  // no - computed: false, optional: true, required: false
  private _no?: boolean | cdktf.IResolvable; 
  public get no() {
    return this.getBooleanAttribute('no');
  }
  public set no(value: boolean | cdktf.IResolvable) {
    this._no = value;
  }
  public resetNo() {
    this._no = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no;
  }

  // yes - computed: false, optional: true, required: false
  private _yes = new UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyYes) {
    this._yes.internalValue = value;
  }
  public resetYes() {
    this._yes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yesInput() {
    return this._yes.internalValue;
  }
}
export interface UztnaFlowFlowTypeSamlMessageIdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#issuer UztnaFlow#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#post UztnaFlow#post}
  */
  readonly post?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#redirect UztnaFlow#redirect}
  */
  readonly redirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#sso_url UztnaFlow#sso_url}
  */
  readonly ssoUrl: string;
  /**
  * idp_assert_verification_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#idp_assert_verification_cert UztnaFlow#idp_assert_verification_cert}
  */
  readonly idpAssertVerificationCert?: UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCert;
  /**
  * idp_security_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#idp_security_property UztnaFlow#idp_security_property}
  */
  readonly idpSecurityProperty: UztnaFlowFlowTypeSamlMessageIdpIdpSecurityProperty;
}

export function uztnaFlowFlowTypeSamlMessageIdpToTerraform(struct?: UztnaFlowFlowTypeSamlMessageIdpOutputReference | UztnaFlowFlowTypeSamlMessageIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
    post: cdktf.booleanToTerraform(struct!.post),
    redirect: cdktf.booleanToTerraform(struct!.redirect),
    sso_url: cdktf.stringToTerraform(struct!.ssoUrl),
    idp_assert_verification_cert: uztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertToTerraform(struct!.idpAssertVerificationCert),
    idp_security_property: uztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyToTerraform(struct!.idpSecurityProperty),
  }
}


export function uztnaFlowFlowTypeSamlMessageIdpToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageIdpOutputReference | UztnaFlowFlowTypeSamlMessageIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post: {
      value: cdktf.booleanToHclTerraform(struct!.post),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect: {
      value: cdktf.booleanToHclTerraform(struct!.redirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sso_url: {
      value: cdktf.stringToHclTerraform(struct!.ssoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_assert_verification_cert: {
      value: uztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertToHclTerraform(struct!.idpAssertVerificationCert),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertList",
    },
    idp_security_property: {
      value: uztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyToHclTerraform(struct!.idpSecurityProperty),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageIdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._post !== undefined) {
      hasAnyValues = true;
      internalValueResult.post = this._post;
    }
    if (this._redirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect;
    }
    if (this._ssoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoUrl = this._ssoUrl;
    }
    if (this._idpAssertVerificationCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpAssertVerificationCert = this._idpAssertVerificationCert?.internalValue;
    }
    if (this._idpSecurityProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpSecurityProperty = this._idpSecurityProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageIdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuer = undefined;
      this._post = undefined;
      this._redirect = undefined;
      this._ssoUrl = undefined;
      this._idpAssertVerificationCert.internalValue = undefined;
      this._idpSecurityProperty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuer = value.issuer;
      this._post = value.post;
      this._redirect = value.redirect;
      this._ssoUrl = value.ssoUrl;
      this._idpAssertVerificationCert.internalValue = value.idpAssertVerificationCert;
      this._idpSecurityProperty.internalValue = value.idpSecurityProperty;
    }
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // post - computed: false, optional: true, required: false
  private _post?: boolean | cdktf.IResolvable; 
  public get post() {
    return this.getBooleanAttribute('post');
  }
  public set post(value: boolean | cdktf.IResolvable) {
    this._post = value;
  }
  public resetPost() {
    this._post = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInput() {
    return this._post;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect?: boolean | cdktf.IResolvable; 
  public get redirect() {
    return this.getBooleanAttribute('redirect');
  }
  public set redirect(value: boolean | cdktf.IResolvable) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // sso_url - computed: false, optional: false, required: true
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
  }

  // idp_assert_verification_cert - computed: false, optional: true, required: false
  private _idpAssertVerificationCert = new UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCertOutputReference(this, "idp_assert_verification_cert");
  public get idpAssertVerificationCert() {
    return this._idpAssertVerificationCert;
  }
  public putIdpAssertVerificationCert(value: UztnaFlowFlowTypeSamlMessageIdpIdpAssertVerificationCert) {
    this._idpAssertVerificationCert.internalValue = value;
  }
  public resetIdpAssertVerificationCert() {
    this._idpAssertVerificationCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpAssertVerificationCertInput() {
    return this._idpAssertVerificationCert.internalValue;
  }

  // idp_security_property - computed: false, optional: false, required: true
  private _idpSecurityProperty = new UztnaFlowFlowTypeSamlMessageIdpIdpSecurityPropertyOutputReference(this, "idp_security_property");
  public get idpSecurityProperty() {
    return this._idpSecurityProperty;
  }
  public putIdpSecurityProperty(value: UztnaFlowFlowTypeSamlMessageIdpIdpSecurityProperty) {
    this._idpSecurityProperty.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSecurityPropertyInput() {
    return this._idpSecurityProperty.internalValue;
  }
}
export interface UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#url UztnaFlow#url}
  */
  readonly url: string;
}

export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocatorToTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocatorOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocatorToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocatorOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUri {
  /**
  * uniform_resource_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#uniform_resource_locator UztnaFlow#uniform_resource_locator}
  */
  readonly uniformResourceLocator?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocator;
}

export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriToTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uniform_resource_locator: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocatorToTerraform(struct!.uniformResourceLocator),
  }
}


export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uniform_resource_locator: {
      value: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocatorToHclTerraform(struct!.uniformResourceLocator),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uniformResourceLocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformResourceLocator = this._uniformResourceLocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uniformResourceLocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uniformResourceLocator.internalValue = value.uniformResourceLocator;
    }
  }

  // uniform_resource_locator - computed: false, optional: true, required: false
  private _uniformResourceLocator = new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocatorOutputReference(this, "uniform_resource_locator");
  public get uniformResourceLocator() {
    return this._uniformResourceLocator;
  }
  public putUniformResourceLocator(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriUniformResourceLocator) {
    this._uniformResourceLocator.internalValue = value;
  }
  public resetUniformResourceLocator() {
    this._uniformResourceLocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformResourceLocatorInput() {
    return this._uniformResourceLocator.internalValue;
  }
}
export interface UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#name UztnaFlow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#namespace UztnaFlow#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#tenant UztnaFlow#tenant}
  */
  readonly tenant?: string;
}

export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificateToTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificateToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificateList extends cdktf.ComplexList {
  public internalValue? : UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificate[] | cdktf.IResolvable

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
  public get(index: number): UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificateOutputReference {
    return new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuth {
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#certificate UztnaFlow#certificate}
  */
  readonly certificate?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificate[] | cdktf.IResolvable;
}

export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthToTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.listMapper(uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificateToTerraform, true)(struct!.certificate),
  }
}


export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.listMapperHcl(uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificateToHclTerraform, true)(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate.internalValue = value.certificate;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}
export interface UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#no_auth_req UztnaFlow#no_auth_req}
  */
  readonly noAuthReq?: boolean | cdktf.IResolvable;
  /**
  * sign_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#sign_auth UztnaFlow#sign_auth}
  */
  readonly signAuth?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuth;
}

export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestToTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_auth_req: cdktf.booleanToTerraform(struct!.noAuthReq),
    sign_auth: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthToTerraform(struct!.signAuth),
  }
}


export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_auth_req: {
      value: cdktf.booleanToHclTerraform(struct!.noAuthReq),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sign_auth: {
      value: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthToHclTerraform(struct!.signAuth),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noAuthReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAuthReq = this._noAuthReq;
    }
    if (this._signAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signAuth = this._signAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noAuthReq = undefined;
      this._signAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noAuthReq = value.noAuthReq;
      this._signAuth.internalValue = value.signAuth;
    }
  }

  // no_auth_req - computed: false, optional: true, required: false
  private _noAuthReq?: boolean | cdktf.IResolvable; 
  public get noAuthReq() {
    return this.getBooleanAttribute('no_auth_req');
  }
  public set noAuthReq(value: boolean | cdktf.IResolvable) {
    this._noAuthReq = value;
  }
  public resetNoAuthReq() {
    this._noAuthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthReqInput() {
    return this._noAuthReq;
  }

  // sign_auth - computed: false, optional: true, required: false
  private _signAuth = new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuthOutputReference(this, "sign_auth");
  public get signAuth() {
    return this._signAuth;
  }
  public putSignAuth(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestSignAuth) {
    this._signAuth.internalValue = value;
  }
  public resetSignAuth() {
    this._signAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAuthInput() {
    return this._signAuth.internalValue;
  }
}
export interface UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#name UztnaFlow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#namespace UztnaFlow#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#tenant UztnaFlow#tenant}
  */
  readonly tenant?: string;
}

export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificateToTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificateToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificateList extends cdktf.ComplexList {
  public internalValue? : UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificate[] | cdktf.IResolvable

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
  public get(index: number): UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificateOutputReference {
    return new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReq {
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#certificate UztnaFlow#certificate}
  */
  readonly certificate?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificate[] | cdktf.IResolvable;
}

export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqToTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.listMapper(uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificateToTerraform, true)(struct!.certificate),
  }
}


export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.listMapperHcl(uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificateToHclTerraform, true)(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate.internalValue = value.certificate;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}
export interface UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#no_encrypt_req UztnaFlow#no_encrypt_req}
  */
  readonly noEncryptReq?: boolean | cdktf.IResolvable;
  /**
  * encrypt_req block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#encrypt_req UztnaFlow#encrypt_req}
  */
  readonly encryptReq?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReq;
}

export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionToTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_encrypt_req: cdktf.booleanToTerraform(struct!.noEncryptReq),
    encrypt_req: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqToTerraform(struct!.encryptReq),
  }
}


export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_encrypt_req: {
      value: cdktf.booleanToHclTerraform(struct!.noEncryptReq),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypt_req: {
      value: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqToHclTerraform(struct!.encryptReq),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noEncryptReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.noEncryptReq = this._noEncryptReq;
    }
    if (this._encryptReq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptReq = this._encryptReq?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noEncryptReq = undefined;
      this._encryptReq.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noEncryptReq = value.noEncryptReq;
      this._encryptReq.internalValue = value.encryptReq;
    }
  }

  // no_encrypt_req - computed: false, optional: true, required: false
  private _noEncryptReq?: boolean | cdktf.IResolvable; 
  public get noEncryptReq() {
    return this.getBooleanAttribute('no_encrypt_req');
  }
  public set noEncryptReq(value: boolean | cdktf.IResolvable) {
    this._noEncryptReq = value;
  }
  public resetNoEncryptReq() {
    this._noEncryptReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noEncryptReqInput() {
    return this._noEncryptReq;
  }

  // encrypt_req - computed: false, optional: true, required: false
  private _encryptReq = new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReqOutputReference(this, "encrypt_req");
  public get encryptReq() {
    return this._encryptReq;
  }
  public putEncryptReq(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionEncryptReq) {
    this._encryptReq.internalValue = value;
  }
  public resetEncryptReq() {
    this._encryptReq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptReqInput() {
    return this._encryptReq.internalValue;
  }
}
export interface UztnaFlowFlowTypeSamlMessageServiceProviderProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#force_authentication UztnaFlow#force_authentication}
  */
  readonly forceAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#relay_state UztnaFlow#relay_state}
  */
  readonly relayState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#type UztnaFlow#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#want_signed_assertion UztnaFlow#want_signed_assertion}
  */
  readonly wantSignedAssertion?: boolean | cdktf.IResolvable;
  /**
  * audience_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#audience_uri UztnaFlow#audience_uri}
  */
  readonly audienceUri: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUri;
  /**
  * sign_authentication_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#sign_authentication_request UztnaFlow#sign_authentication_request}
  */
  readonly signAuthenticationRequest: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequest;
  /**
  * want_encrypted_assertion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#want_encrypted_assertion UztnaFlow#want_encrypted_assertion}
  */
  readonly wantEncryptedAssertion: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertion;
}

export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesToTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_authentication: cdktf.booleanToTerraform(struct!.forceAuthentication),
    relay_state: cdktf.stringToTerraform(struct!.relayState),
    type: cdktf.stringToTerraform(struct!.type),
    want_signed_assertion: cdktf.booleanToTerraform(struct!.wantSignedAssertion),
    audience_uri: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriToTerraform(struct!.audienceUri),
    sign_authentication_request: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestToTerraform(struct!.signAuthenticationRequest),
    want_encrypted_assertion: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionToTerraform(struct!.wantEncryptedAssertion),
  }
}


export function uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesOutputReference | UztnaFlowFlowTypeSamlMessageServiceProviderProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.forceAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relay_state: {
      value: cdktf.stringToHclTerraform(struct!.relayState),
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
    want_signed_assertion: {
      value: cdktf.booleanToHclTerraform(struct!.wantSignedAssertion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audience_uri: {
      value: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriToHclTerraform(struct!.audienceUri),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriList",
    },
    sign_authentication_request: {
      value: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestToHclTerraform(struct!.signAuthenticationRequest),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestList",
    },
    want_encrypted_assertion: {
      value: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionToHclTerraform(struct!.wantEncryptedAssertion),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessageServiceProviderProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceAuthentication = this._forceAuthentication;
    }
    if (this._relayState !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayState = this._relayState;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wantSignedAssertion !== undefined) {
      hasAnyValues = true;
      internalValueResult.wantSignedAssertion = this._wantSignedAssertion;
    }
    if (this._audienceUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audienceUri = this._audienceUri?.internalValue;
    }
    if (this._signAuthenticationRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signAuthenticationRequest = this._signAuthenticationRequest?.internalValue;
    }
    if (this._wantEncryptedAssertion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wantEncryptedAssertion = this._wantEncryptedAssertion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessageServiceProviderProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceAuthentication = undefined;
      this._relayState = undefined;
      this._type = undefined;
      this._wantSignedAssertion = undefined;
      this._audienceUri.internalValue = undefined;
      this._signAuthenticationRequest.internalValue = undefined;
      this._wantEncryptedAssertion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceAuthentication = value.forceAuthentication;
      this._relayState = value.relayState;
      this._type = value.type;
      this._wantSignedAssertion = value.wantSignedAssertion;
      this._audienceUri.internalValue = value.audienceUri;
      this._signAuthenticationRequest.internalValue = value.signAuthenticationRequest;
      this._wantEncryptedAssertion.internalValue = value.wantEncryptedAssertion;
    }
  }

  // force_authentication - computed: false, optional: true, required: false
  private _forceAuthentication?: boolean | cdktf.IResolvable; 
  public get forceAuthentication() {
    return this.getBooleanAttribute('force_authentication');
  }
  public set forceAuthentication(value: boolean | cdktf.IResolvable) {
    this._forceAuthentication = value;
  }
  public resetForceAuthentication() {
    this._forceAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAuthenticationInput() {
    return this._forceAuthentication;
  }

  // relay_state - computed: false, optional: true, required: false
  private _relayState?: string; 
  public get relayState() {
    return this.getStringAttribute('relay_state');
  }
  public set relayState(value: string) {
    this._relayState = value;
  }
  public resetRelayState() {
    this._relayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayStateInput() {
    return this._relayState;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // want_signed_assertion - computed: false, optional: true, required: false
  private _wantSignedAssertion?: boolean | cdktf.IResolvable; 
  public get wantSignedAssertion() {
    return this.getBooleanAttribute('want_signed_assertion');
  }
  public set wantSignedAssertion(value: boolean | cdktf.IResolvable) {
    this._wantSignedAssertion = value;
  }
  public resetWantSignedAssertion() {
    this._wantSignedAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantSignedAssertionInput() {
    return this._wantSignedAssertion;
  }

  // audience_uri - computed: false, optional: false, required: true
  private _audienceUri = new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUriOutputReference(this, "audience_uri");
  public get audienceUri() {
    return this._audienceUri;
  }
  public putAudienceUri(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesAudienceUri) {
    this._audienceUri.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceUriInput() {
    return this._audienceUri.internalValue;
  }

  // sign_authentication_request - computed: false, optional: false, required: true
  private _signAuthenticationRequest = new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequestOutputReference(this, "sign_authentication_request");
  public get signAuthenticationRequest() {
    return this._signAuthenticationRequest;
  }
  public putSignAuthenticationRequest(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesSignAuthenticationRequest) {
    this._signAuthenticationRequest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signAuthenticationRequestInput() {
    return this._signAuthenticationRequest.internalValue;
  }

  // want_encrypted_assertion - computed: false, optional: false, required: true
  private _wantEncryptedAssertion = new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertionOutputReference(this, "want_encrypted_assertion");
  public get wantEncryptedAssertion() {
    return this._wantEncryptedAssertion;
  }
  public putWantEncryptedAssertion(value: UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesWantEncryptedAssertion) {
    this._wantEncryptedAssertion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wantEncryptedAssertionInput() {
    return this._wantEncryptedAssertion.internalValue;
  }
}
export interface UztnaFlowFlowTypeSamlMessage {
  /**
  * application_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#application_tag UztnaFlow#application_tag}
  */
  readonly applicationTag: UztnaFlowFlowTypeSamlMessageApplicationTag;
  /**
  * idp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#idp UztnaFlow#idp}
  */
  readonly idp: UztnaFlowFlowTypeSamlMessageIdp;
  /**
  * service_provider_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#service_provider_properties UztnaFlow#service_provider_properties}
  */
  readonly serviceProviderProperties: UztnaFlowFlowTypeSamlMessageServiceProviderProperties;
}

export function uztnaFlowFlowTypeSamlMessageToTerraform(struct?: UztnaFlowFlowTypeSamlMessageOutputReference | UztnaFlowFlowTypeSamlMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_tag: uztnaFlowFlowTypeSamlMessageApplicationTagToTerraform(struct!.applicationTag),
    idp: uztnaFlowFlowTypeSamlMessageIdpToTerraform(struct!.idp),
    service_provider_properties: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesToTerraform(struct!.serviceProviderProperties),
  }
}


export function uztnaFlowFlowTypeSamlMessageToHclTerraform(struct?: UztnaFlowFlowTypeSamlMessageOutputReference | UztnaFlowFlowTypeSamlMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_tag: {
      value: uztnaFlowFlowTypeSamlMessageApplicationTagToHclTerraform(struct!.applicationTag),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageApplicationTagList",
    },
    idp: {
      value: uztnaFlowFlowTypeSamlMessageIdpToHclTerraform(struct!.idp),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageIdpList",
    },
    service_provider_properties: {
      value: uztnaFlowFlowTypeSamlMessageServiceProviderPropertiesToHclTerraform(struct!.serviceProviderProperties),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeSamlMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowTypeSamlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTag = this._applicationTag?.internalValue;
    }
    if (this._idp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idp = this._idp?.internalValue;
    }
    if (this._serviceProviderProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviderProperties = this._serviceProviderProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowTypeSamlMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationTag.internalValue = undefined;
      this._idp.internalValue = undefined;
      this._serviceProviderProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationTag.internalValue = value.applicationTag;
      this._idp.internalValue = value.idp;
      this._serviceProviderProperties.internalValue = value.serviceProviderProperties;
    }
  }

  // application_tag - computed: false, optional: false, required: true
  private _applicationTag = new UztnaFlowFlowTypeSamlMessageApplicationTagOutputReference(this, "application_tag");
  public get applicationTag() {
    return this._applicationTag;
  }
  public putApplicationTag(value: UztnaFlowFlowTypeSamlMessageApplicationTag) {
    this._applicationTag.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTagInput() {
    return this._applicationTag.internalValue;
  }

  // idp - computed: false, optional: false, required: true
  private _idp = new UztnaFlowFlowTypeSamlMessageIdpOutputReference(this, "idp");
  public get idp() {
    return this._idp;
  }
  public putIdp(value: UztnaFlowFlowTypeSamlMessageIdp) {
    this._idp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp.internalValue;
  }

  // service_provider_properties - computed: false, optional: false, required: true
  private _serviceProviderProperties = new UztnaFlowFlowTypeSamlMessageServiceProviderPropertiesOutputReference(this, "service_provider_properties");
  public get serviceProviderProperties() {
    return this._serviceProviderProperties;
  }
  public putServiceProviderProperties(value: UztnaFlowFlowTypeSamlMessageServiceProviderProperties) {
    this._serviceProviderProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderPropertiesInput() {
    return this._serviceProviderProperties.internalValue;
  }
}
export interface UztnaFlowFlowType {
  /**
  * geo_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#geo_match UztnaFlow#geo_match}
  */
  readonly geoMatch?: UztnaFlowFlowTypeGeoMatch;
  /**
  * saml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#saml_message UztnaFlow#saml_message}
  */
  readonly samlMessage?: UztnaFlowFlowTypeSamlMessage;
}

export function uztnaFlowFlowTypeToTerraform(struct?: UztnaFlowFlowTypeOutputReference | UztnaFlowFlowType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_match: uztnaFlowFlowTypeGeoMatchToTerraform(struct!.geoMatch),
    saml_message: uztnaFlowFlowTypeSamlMessageToTerraform(struct!.samlMessage),
  }
}


export function uztnaFlowFlowTypeToHclTerraform(struct?: UztnaFlowFlowTypeOutputReference | UztnaFlowFlowType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_match: {
      value: uztnaFlowFlowTypeGeoMatchToHclTerraform(struct!.geoMatch),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeGeoMatchList",
    },
    saml_message: {
      value: uztnaFlowFlowTypeSamlMessageToHclTerraform(struct!.samlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaFlowFlowTypeSamlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaFlowFlowTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaFlowFlowType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoMatch = this._geoMatch?.internalValue;
    }
    if (this._samlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlMessage = this._samlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaFlowFlowType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoMatch.internalValue = undefined;
      this._samlMessage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoMatch.internalValue = value.geoMatch;
      this._samlMessage.internalValue = value.samlMessage;
    }
  }

  // geo_match - computed: false, optional: true, required: false
  private _geoMatch = new UztnaFlowFlowTypeGeoMatchOutputReference(this, "geo_match");
  public get geoMatch() {
    return this._geoMatch;
  }
  public putGeoMatch(value: UztnaFlowFlowTypeGeoMatch) {
    this._geoMatch.internalValue = value;
  }
  public resetGeoMatch() {
    this._geoMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchInput() {
    return this._geoMatch.internalValue;
  }

  // saml_message - computed: false, optional: true, required: false
  private _samlMessage = new UztnaFlowFlowTypeSamlMessageOutputReference(this, "saml_message");
  public get samlMessage() {
    return this._samlMessage;
  }
  public putSamlMessage(value: UztnaFlowFlowTypeSamlMessage) {
    this._samlMessage.internalValue = value;
  }
  public resetSamlMessage() {
    this._samlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMessageInput() {
    return this._samlMessage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow volterra_uztna_flow}
*/
export class UztnaFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_uztna_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UztnaFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UztnaFlow to import
  * @param importFromId The id of the existing UztnaFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UztnaFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_uztna_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_flow volterra_uztna_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UztnaFlowConfig
  */
  public constructor(scope: Construct, id: string, config: UztnaFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_uztna_flow',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._flowType.internalValue = config.flowType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // flow_type - computed: false, optional: false, required: true
  private _flowType = new UztnaFlowFlowTypeOutputReference(this, "flow_type");
  public get flowType() {
    return this._flowType;
  }
  public putFlowType(value: UztnaFlowFlowType) {
    this._flowType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowTypeInput() {
    return this._flowType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      flow_type: uztnaFlowFlowTypeToTerraform(this._flowType.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_type: {
        value: uztnaFlowFlowTypeToHclTerraform(this._flowType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaFlowFlowTypeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
