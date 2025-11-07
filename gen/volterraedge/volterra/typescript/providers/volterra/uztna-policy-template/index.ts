// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UztnaPolicyTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#annotations UztnaPolicyTemplate#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#description UztnaPolicyTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#disable UztnaPolicyTemplate#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#id UztnaPolicyTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#labels UztnaPolicyTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#name UztnaPolicyTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#namespace UztnaPolicyTemplate#namespace}
  */
  readonly namespace: string;
  /**
  * on_start_flow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#on_start_flow UztnaPolicyTemplate#on_start_flow}
  */
  readonly onStartFlow: UztnaPolicyTemplateOnStartFlow;
}
export interface UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#name UztnaPolicyTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#namespace UztnaPolicyTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#tenant UztnaPolicyTemplate#tenant}
  */
  readonly tenant?: string;
}

export function uztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatchToTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatch | cdktf.IResolvable): any {
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


export function uztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatchToHclTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatch | cdktf.IResolvable): any {
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

export class UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatch | cdktf.IResolvable | undefined) {
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

export class UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatchList extends cdktf.ComplexList {
  public internalValue? : UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatch[] | cdktf.IResolvable

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
  public get(index: number): UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatchOutputReference {
    return new UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatch {
  /**
  * geomatch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#geomatch UztnaPolicyTemplate#geomatch}
  */
  readonly geomatch: UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatch[] | cdktf.IResolvable;
}

export function uztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchToTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchOutputReference | UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geomatch: cdktf.listMapper(uztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatchToTerraform, true)(struct!.geomatch),
  }
}


export function uztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchToHclTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchOutputReference | UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geomatch: {
      value: cdktf.listMapperHcl(uztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatchToHclTerraform, true)(struct!.geomatch),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geomatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geomatch = this._geomatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geomatch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geomatch.internalValue = value.geomatch;
    }
  }

  // geomatch - computed: false, optional: false, required: true
  private _geomatch = new UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatchList(this, "geomatch", false);
  public get geomatch() {
    return this._geomatch;
  }
  public putGeomatch(value: UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchGeomatch[] | cdktf.IResolvable) {
    this._geomatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geomatchInput() {
    return this._geomatch.internalValue;
  }
}
export interface UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSaml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#name UztnaPolicyTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#namespace UztnaPolicyTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#tenant UztnaPolicyTemplate#tenant}
  */
  readonly tenant?: string;
}

export function uztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSamlToTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSaml | cdktf.IResolvable): any {
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


export function uztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSamlToHclTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSaml | cdktf.IResolvable): any {
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

export class UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSaml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSaml | cdktf.IResolvable | undefined) {
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

export class UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSamlList extends cdktf.ComplexList {
  public internalValue? : UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSaml[] | cdktf.IResolvable

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
  public get(index: number): UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSamlOutputReference {
    return new UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederation {
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#saml UztnaPolicyTemplate#saml}
  */
  readonly saml: UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSaml[] | cdktf.IResolvable;
}

export function uztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationToTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationOutputReference | UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saml: cdktf.listMapper(uztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSamlToTerraform, true)(struct!.saml),
  }
}


export function uztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationToHclTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationOutputReference | UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saml: {
      value: cdktf.listMapperHcl(uztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._saml.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._saml.internalValue = value.saml;
    }
  }

  // saml - computed: false, optional: false, required: true
  private _saml = new UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationSaml[] | cdktf.IResolvable) {
    this._saml.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }
}
export interface UztnaPolicyTemplateOnStartFlowSimpleFlows {
  /**
  * geolocation_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#geolocation_match UztnaPolicyTemplate#geolocation_match}
  */
  readonly geolocationMatch?: UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatch;
  /**
  * saml_federation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#saml_federation UztnaPolicyTemplate#saml_federation}
  */
  readonly samlFederation?: UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederation;
}

export function uztnaPolicyTemplateOnStartFlowSimpleFlowsToTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geolocation_match: uztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchToTerraform(struct!.geolocationMatch),
    saml_federation: uztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationToTerraform(struct!.samlFederation),
  }
}


export function uztnaPolicyTemplateOnStartFlowSimpleFlowsToHclTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geolocation_match: {
      value: uztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchToHclTerraform(struct!.geolocationMatch),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchList",
    },
    saml_federation: {
      value: uztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationToHclTerraform(struct!.samlFederation),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaPolicyTemplateOnStartFlowSimpleFlowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaPolicyTemplateOnStartFlowSimpleFlows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geolocationMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocationMatch = this._geolocationMatch?.internalValue;
    }
    if (this._samlFederation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlFederation = this._samlFederation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaPolicyTemplateOnStartFlowSimpleFlows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geolocationMatch.internalValue = undefined;
      this._samlFederation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geolocationMatch.internalValue = value.geolocationMatch;
      this._samlFederation.internalValue = value.samlFederation;
    }
  }

  // geolocation_match - computed: false, optional: true, required: false
  private _geolocationMatch = new UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatchOutputReference(this, "geolocation_match");
  public get geolocationMatch() {
    return this._geolocationMatch;
  }
  public putGeolocationMatch(value: UztnaPolicyTemplateOnStartFlowSimpleFlowsGeolocationMatch) {
    this._geolocationMatch.internalValue = value;
  }
  public resetGeolocationMatch() {
    this._geolocationMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationMatchInput() {
    return this._geolocationMatch.internalValue;
  }

  // saml_federation - computed: false, optional: true, required: false
  private _samlFederation = new UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederationOutputReference(this, "saml_federation");
  public get samlFederation() {
    return this._samlFederation;
  }
  public putSamlFederation(value: UztnaPolicyTemplateOnStartFlowSimpleFlowsSamlFederation) {
    this._samlFederation.internalValue = value;
  }
  public resetSamlFederation() {
    this._samlFederation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlFederationInput() {
    return this._samlFederation.internalValue;
  }
}

export class UztnaPolicyTemplateOnStartFlowSimpleFlowsList extends cdktf.ComplexList {
  public internalValue? : UztnaPolicyTemplateOnStartFlowSimpleFlows[] | cdktf.IResolvable

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
  public get(index: number): UztnaPolicyTemplateOnStartFlowSimpleFlowsOutputReference {
    return new UztnaPolicyTemplateOnStartFlowSimpleFlowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaPolicyTemplateOnStartFlowSimple {
  /**
  * flows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#flows UztnaPolicyTemplate#flows}
  */
  readonly flows: UztnaPolicyTemplateOnStartFlowSimpleFlows[] | cdktf.IResolvable;
}

export function uztnaPolicyTemplateOnStartFlowSimpleToTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleOutputReference | UztnaPolicyTemplateOnStartFlowSimple): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flows: cdktf.listMapper(uztnaPolicyTemplateOnStartFlowSimpleFlowsToTerraform, true)(struct!.flows),
  }
}


export function uztnaPolicyTemplateOnStartFlowSimpleToHclTerraform(struct?: UztnaPolicyTemplateOnStartFlowSimpleOutputReference | UztnaPolicyTemplateOnStartFlowSimple): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flows: {
      value: cdktf.listMapperHcl(uztnaPolicyTemplateOnStartFlowSimpleFlowsToHclTerraform, true)(struct!.flows),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaPolicyTemplateOnStartFlowSimpleFlowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaPolicyTemplateOnStartFlowSimpleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaPolicyTemplateOnStartFlowSimple | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flows = this._flows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaPolicyTemplateOnStartFlowSimple | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flows.internalValue = value.flows;
    }
  }

  // flows - computed: false, optional: false, required: true
  private _flows = new UztnaPolicyTemplateOnStartFlowSimpleFlowsList(this, "flows", false);
  public get flows() {
    return this._flows;
  }
  public putFlows(value: UztnaPolicyTemplateOnStartFlowSimpleFlows[] | cdktf.IResolvable) {
    this._flows.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowsInput() {
    return this._flows.internalValue;
  }
}
export interface UztnaPolicyTemplateOnStartFlow {
  /**
  * simple block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#simple UztnaPolicyTemplate#simple}
  */
  readonly simple?: UztnaPolicyTemplateOnStartFlowSimple;
}

export function uztnaPolicyTemplateOnStartFlowToTerraform(struct?: UztnaPolicyTemplateOnStartFlowOutputReference | UztnaPolicyTemplateOnStartFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple: uztnaPolicyTemplateOnStartFlowSimpleToTerraform(struct!.simple),
  }
}


export function uztnaPolicyTemplateOnStartFlowToHclTerraform(struct?: UztnaPolicyTemplateOnStartFlowOutputReference | UztnaPolicyTemplateOnStartFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple: {
      value: uztnaPolicyTemplateOnStartFlowSimpleToHclTerraform(struct!.simple),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaPolicyTemplateOnStartFlowSimpleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaPolicyTemplateOnStartFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaPolicyTemplateOnStartFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simple?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simple = this._simple?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaPolicyTemplateOnStartFlow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._simple.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._simple.internalValue = value.simple;
    }
  }

  // simple - computed: false, optional: true, required: false
  private _simple = new UztnaPolicyTemplateOnStartFlowSimpleOutputReference(this, "simple");
  public get simple() {
    return this._simple;
  }
  public putSimple(value: UztnaPolicyTemplateOnStartFlowSimple) {
    this._simple.internalValue = value;
  }
  public resetSimple() {
    this._simple.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleInput() {
    return this._simple.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template volterra_uztna_policy_template}
*/
export class UztnaPolicyTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_uztna_policy_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UztnaPolicyTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UztnaPolicyTemplate to import
  * @param importFromId The id of the existing UztnaPolicyTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UztnaPolicyTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_uztna_policy_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_policy_template volterra_uztna_policy_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UztnaPolicyTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: UztnaPolicyTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_uztna_policy_template',
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
    this._onStartFlow.internalValue = config.onStartFlow;
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

  // on_start_flow - computed: false, optional: false, required: true
  private _onStartFlow = new UztnaPolicyTemplateOnStartFlowOutputReference(this, "on_start_flow");
  public get onStartFlow() {
    return this._onStartFlow;
  }
  public putOnStartFlow(value: UztnaPolicyTemplateOnStartFlow) {
    this._onStartFlow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartFlowInput() {
    return this._onStartFlow.internalValue;
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
      on_start_flow: uztnaPolicyTemplateOnStartFlowToTerraform(this._onStartFlow.internalValue),
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
      on_start_flow: {
        value: uztnaPolicyTemplateOnStartFlowToHclTerraform(this._onStartFlow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaPolicyTemplateOnStartFlowList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
