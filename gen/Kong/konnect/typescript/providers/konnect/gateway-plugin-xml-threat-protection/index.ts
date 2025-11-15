// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginXmlThreatProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#config GatewayPluginXmlThreatProtection#config}
  */
  readonly config?: GatewayPluginXmlThreatProtectionConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#consumer GatewayPluginXmlThreatProtection#consumer}
  */
  readonly consumer?: GatewayPluginXmlThreatProtectionConsumer;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#control_plane_id GatewayPluginXmlThreatProtection#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#created_at GatewayPluginXmlThreatProtection#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#enabled GatewayPluginXmlThreatProtection#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#id GatewayPluginXmlThreatProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#instance_name GatewayPluginXmlThreatProtection#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#ordering GatewayPluginXmlThreatProtection#ordering}
  */
  readonly ordering?: GatewayPluginXmlThreatProtectionOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#partials GatewayPluginXmlThreatProtection#partials}
  */
  readonly partials?: GatewayPluginXmlThreatProtectionPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#protocols GatewayPluginXmlThreatProtection#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#route GatewayPluginXmlThreatProtection#route}
  */
  readonly route?: GatewayPluginXmlThreatProtectionRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#service GatewayPluginXmlThreatProtection#service}
  */
  readonly service?: GatewayPluginXmlThreatProtectionService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#tags GatewayPluginXmlThreatProtection#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#updated_at GatewayPluginXmlThreatProtection#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginXmlThreatProtectionConfigA {
  /**
  * Indicates whether an XML Document Type Definition (DTD) section is allowed. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#allow_dtd GatewayPluginXmlThreatProtection#allow_dtd}
  */
  readonly allowDtd?: boolean | cdktf.IResolvable;
  /**
  * A list of Content-Type values with payloads that are allowed, but aren't validated. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#allowed_content_types GatewayPluginXmlThreatProtection#allowed_content_types}
  */
  readonly allowedContentTypes?: string[];
  /**
  * Maximum size of the attribute value. Default: 1048576
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#attribute GatewayPluginXmlThreatProtection#attribute}
  */
  readonly attribute?: number;
  /**
  * Sets the maximum allowed amplification. This protects against the Billion Laughs Attack. Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#bla_max_amplification GatewayPluginXmlThreatProtection#bla_max_amplification}
  */
  readonly blaMaxAmplification?: number;
  /**
  * Sets the threshold after which the protection starts. This protects against the Billion Laughs Attack. Default: 8388608
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#bla_threshold GatewayPluginXmlThreatProtection#bla_threshold}
  */
  readonly blaThreshold?: number;
  /**
  * Maximum size of the unparsed buffer (see below). Default: 1048576
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#buffer GatewayPluginXmlThreatProtection#buffer}
  */
  readonly buffer?: number;
  /**
  * A list of Content-Type values with payloads that must be validated. Default: ["application/xml"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#checked_content_types GatewayPluginXmlThreatProtection#checked_content_types}
  */
  readonly checkedContentTypes?: string[];
  /**
  * Maximum size of comments. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#comment GatewayPluginXmlThreatProtection#comment}
  */
  readonly comment?: number;
  /**
  * Maximum size of the entire document. Default: 10485760
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#document GatewayPluginXmlThreatProtection#document}
  */
  readonly document?: number;
  /**
  * Maximum size of entity values in EntityDecl. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#entity GatewayPluginXmlThreatProtection#entity}
  */
  readonly entity?: number;
  /**
  * Maximum size of entity names in EntityDecl. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#entityname GatewayPluginXmlThreatProtection#entityname}
  */
  readonly entityname?: number;
  /**
  * Maximum size of systemId, publicId, or notationName in EntityDecl. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#entityproperty GatewayPluginXmlThreatProtection#entityproperty}
  */
  readonly entityproperty?: number;
  /**
  * Maximum size of the localname. This applies to tags and attributes. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#localname GatewayPluginXmlThreatProtection#localname}
  */
  readonly localname?: number;
  /**
  * Maximum number of attributes allowed on a tag, including default ones. Note: If namespace-aware parsing is disabled, then the namespaces definitions are counted as attributes. Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#max_attributes GatewayPluginXmlThreatProtection#max_attributes}
  */
  readonly maxAttributes?: number;
  /**
  * Maximum number of children allowed (Element, Text, Comment, ProcessingInstruction, CDATASection). Note: Adjacent text and CDATA sections are counted as one. For example, text-cdata-text-cdata is one child. Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#max_children GatewayPluginXmlThreatProtection#max_children}
  */
  readonly maxChildren?: number;
  /**
  * Maximum depth of tags. Child elements such as Text or Comments are not counted as another level. Default: 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#max_depth GatewayPluginXmlThreatProtection#max_depth}
  */
  readonly maxDepth?: number;
  /**
  * Maximum number of namespaces defined on a tag. This value is required if parsing is namespace-aware. Default: 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#max_namespaces GatewayPluginXmlThreatProtection#max_namespaces}
  */
  readonly maxNamespaces?: number;
  /**
  * If not parsing namespace aware, all prefixes and namespace attributes will be counted as regular attributes and element names, and validated as such. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#namespace_aware GatewayPluginXmlThreatProtection#namespace_aware}
  */
  readonly namespaceAware?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the namespace URI. This value is required if parsing is namespace-aware. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#namespaceuri GatewayPluginXmlThreatProtection#namespaceuri}
  */
  readonly namespaceuri?: number;
  /**
  * Maximum size of processing instruction data. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#pidata GatewayPluginXmlThreatProtection#pidata}
  */
  readonly pidata?: number;
  /**
  * Maximum size of processing instruction targets. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#pitarget GatewayPluginXmlThreatProtection#pitarget}
  */
  readonly pitarget?: number;
  /**
  * Maximum size of the prefix. This applies to tags and attributes. This value is required if parsing is namespace-aware. Default: 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#prefix GatewayPluginXmlThreatProtection#prefix}
  */
  readonly prefix?: number;
  /**
  * Maximum text inside tags (counted over all adjacent text/CDATA elements combined). Default: 1048576
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#text GatewayPluginXmlThreatProtection#text}
  */
  readonly text?: number;
}

export function gatewayPluginXmlThreatProtectionConfigAToTerraform(struct?: GatewayPluginXmlThreatProtectionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_dtd: cdktf.booleanToTerraform(struct!.allowDtd),
    allowed_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedContentTypes),
    attribute: cdktf.numberToTerraform(struct!.attribute),
    bla_max_amplification: cdktf.numberToTerraform(struct!.blaMaxAmplification),
    bla_threshold: cdktf.numberToTerraform(struct!.blaThreshold),
    buffer: cdktf.numberToTerraform(struct!.buffer),
    checked_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkedContentTypes),
    comment: cdktf.numberToTerraform(struct!.comment),
    document: cdktf.numberToTerraform(struct!.document),
    entity: cdktf.numberToTerraform(struct!.entity),
    entityname: cdktf.numberToTerraform(struct!.entityname),
    entityproperty: cdktf.numberToTerraform(struct!.entityproperty),
    localname: cdktf.numberToTerraform(struct!.localname),
    max_attributes: cdktf.numberToTerraform(struct!.maxAttributes),
    max_children: cdktf.numberToTerraform(struct!.maxChildren),
    max_depth: cdktf.numberToTerraform(struct!.maxDepth),
    max_namespaces: cdktf.numberToTerraform(struct!.maxNamespaces),
    namespace_aware: cdktf.booleanToTerraform(struct!.namespaceAware),
    namespaceuri: cdktf.numberToTerraform(struct!.namespaceuri),
    pidata: cdktf.numberToTerraform(struct!.pidata),
    pitarget: cdktf.numberToTerraform(struct!.pitarget),
    prefix: cdktf.numberToTerraform(struct!.prefix),
    text: cdktf.numberToTerraform(struct!.text),
  }
}


export function gatewayPluginXmlThreatProtectionConfigAToHclTerraform(struct?: GatewayPluginXmlThreatProtectionConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_dtd: {
      value: cdktf.booleanToHclTerraform(struct!.allowDtd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktf.numberToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bla_max_amplification: {
      value: cdktf.numberToHclTerraform(struct!.blaMaxAmplification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bla_threshold: {
      value: cdktf.numberToHclTerraform(struct!.blaThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer: {
      value: cdktf.numberToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    checked_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.checkedContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    comment: {
      value: cdktf.numberToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    document: {
      value: cdktf.numberToHclTerraform(struct!.document),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entity: {
      value: cdktf.numberToHclTerraform(struct!.entity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entityname: {
      value: cdktf.numberToHclTerraform(struct!.entityname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entityproperty: {
      value: cdktf.numberToHclTerraform(struct!.entityproperty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    localname: {
      value: cdktf.numberToHclTerraform(struct!.localname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_attributes: {
      value: cdktf.numberToHclTerraform(struct!.maxAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_children: {
      value: cdktf.numberToHclTerraform(struct!.maxChildren),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_namespaces: {
      value: cdktf.numberToHclTerraform(struct!.maxNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    namespace_aware: {
      value: cdktf.booleanToHclTerraform(struct!.namespaceAware),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespaceuri: {
      value: cdktf.numberToHclTerraform(struct!.namespaceuri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pidata: {
      value: cdktf.numberToHclTerraform(struct!.pidata),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pitarget: {
      value: cdktf.numberToHclTerraform(struct!.pitarget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text: {
      value: cdktf.numberToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginXmlThreatProtectionConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginXmlThreatProtectionConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDtd !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDtd = this._allowDtd;
    }
    if (this._allowedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedContentTypes = this._allowedContentTypes;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._blaMaxAmplification !== undefined) {
      hasAnyValues = true;
      internalValueResult.blaMaxAmplification = this._blaMaxAmplification;
    }
    if (this._blaThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.blaThreshold = this._blaThreshold;
    }
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._checkedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkedContentTypes = this._checkedContentTypes;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._document !== undefined) {
      hasAnyValues = true;
      internalValueResult.document = this._document;
    }
    if (this._entity !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity;
    }
    if (this._entityname !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityname = this._entityname;
    }
    if (this._entityproperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityproperty = this._entityproperty;
    }
    if (this._localname !== undefined) {
      hasAnyValues = true;
      internalValueResult.localname = this._localname;
    }
    if (this._maxAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttributes = this._maxAttributes;
    }
    if (this._maxChildren !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxChildren = this._maxChildren;
    }
    if (this._maxDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDepth = this._maxDepth;
    }
    if (this._maxNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNamespaces = this._maxNamespaces;
    }
    if (this._namespaceAware !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceAware = this._namespaceAware;
    }
    if (this._namespaceuri !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceuri = this._namespaceuri;
    }
    if (this._pidata !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidata = this._pidata;
    }
    if (this._pitarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.pitarget = this._pitarget;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginXmlThreatProtectionConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDtd = undefined;
      this._allowedContentTypes = undefined;
      this._attribute = undefined;
      this._blaMaxAmplification = undefined;
      this._blaThreshold = undefined;
      this._buffer = undefined;
      this._checkedContentTypes = undefined;
      this._comment = undefined;
      this._document = undefined;
      this._entity = undefined;
      this._entityname = undefined;
      this._entityproperty = undefined;
      this._localname = undefined;
      this._maxAttributes = undefined;
      this._maxChildren = undefined;
      this._maxDepth = undefined;
      this._maxNamespaces = undefined;
      this._namespaceAware = undefined;
      this._namespaceuri = undefined;
      this._pidata = undefined;
      this._pitarget = undefined;
      this._prefix = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDtd = value.allowDtd;
      this._allowedContentTypes = value.allowedContentTypes;
      this._attribute = value.attribute;
      this._blaMaxAmplification = value.blaMaxAmplification;
      this._blaThreshold = value.blaThreshold;
      this._buffer = value.buffer;
      this._checkedContentTypes = value.checkedContentTypes;
      this._comment = value.comment;
      this._document = value.document;
      this._entity = value.entity;
      this._entityname = value.entityname;
      this._entityproperty = value.entityproperty;
      this._localname = value.localname;
      this._maxAttributes = value.maxAttributes;
      this._maxChildren = value.maxChildren;
      this._maxDepth = value.maxDepth;
      this._maxNamespaces = value.maxNamespaces;
      this._namespaceAware = value.namespaceAware;
      this._namespaceuri = value.namespaceuri;
      this._pidata = value.pidata;
      this._pitarget = value.pitarget;
      this._prefix = value.prefix;
      this._text = value.text;
    }
  }

  // allow_dtd - computed: true, optional: true, required: false
  private _allowDtd?: boolean | cdktf.IResolvable; 
  public get allowDtd() {
    return this.getBooleanAttribute('allow_dtd');
  }
  public set allowDtd(value: boolean | cdktf.IResolvable) {
    this._allowDtd = value;
  }
  public resetAllowDtd() {
    this._allowDtd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDtdInput() {
    return this._allowDtd;
  }

  // allowed_content_types - computed: true, optional: true, required: false
  private _allowedContentTypes?: string[]; 
  public get allowedContentTypes() {
    return this.getListAttribute('allowed_content_types');
  }
  public set allowedContentTypes(value: string[]) {
    this._allowedContentTypes = value;
  }
  public resetAllowedContentTypes() {
    this._allowedContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedContentTypesInput() {
    return this._allowedContentTypes;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: number; 
  public get attribute() {
    return this.getNumberAttribute('attribute');
  }
  public set attribute(value: number) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // bla_max_amplification - computed: true, optional: true, required: false
  private _blaMaxAmplification?: number; 
  public get blaMaxAmplification() {
    return this.getNumberAttribute('bla_max_amplification');
  }
  public set blaMaxAmplification(value: number) {
    this._blaMaxAmplification = value;
  }
  public resetBlaMaxAmplification() {
    this._blaMaxAmplification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blaMaxAmplificationInput() {
    return this._blaMaxAmplification;
  }

  // bla_threshold - computed: true, optional: true, required: false
  private _blaThreshold?: number; 
  public get blaThreshold() {
    return this.getNumberAttribute('bla_threshold');
  }
  public set blaThreshold(value: number) {
    this._blaThreshold = value;
  }
  public resetBlaThreshold() {
    this._blaThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blaThresholdInput() {
    return this._blaThreshold;
  }

  // buffer - computed: true, optional: true, required: false
  private _buffer?: number; 
  public get buffer() {
    return this.getNumberAttribute('buffer');
  }
  public set buffer(value: number) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // checked_content_types - computed: true, optional: true, required: false
  private _checkedContentTypes?: string[]; 
  public get checkedContentTypes() {
    return this.getListAttribute('checked_content_types');
  }
  public set checkedContentTypes(value: string[]) {
    this._checkedContentTypes = value;
  }
  public resetCheckedContentTypes() {
    this._checkedContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkedContentTypesInput() {
    return this._checkedContentTypes;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: number; 
  public get comment() {
    return this.getNumberAttribute('comment');
  }
  public set comment(value: number) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // document - computed: true, optional: true, required: false
  private _document?: number; 
  public get document() {
    return this.getNumberAttribute('document');
  }
  public set document(value: number) {
    this._document = value;
  }
  public resetDocument() {
    this._document = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document;
  }

  // entity - computed: true, optional: true, required: false
  private _entity?: number; 
  public get entity() {
    return this.getNumberAttribute('entity');
  }
  public set entity(value: number) {
    this._entity = value;
  }
  public resetEntity() {
    this._entity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
  }

  // entityname - computed: true, optional: true, required: false
  private _entityname?: number; 
  public get entityname() {
    return this.getNumberAttribute('entityname');
  }
  public set entityname(value: number) {
    this._entityname = value;
  }
  public resetEntityname() {
    this._entityname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitynameInput() {
    return this._entityname;
  }

  // entityproperty - computed: true, optional: true, required: false
  private _entityproperty?: number; 
  public get entityproperty() {
    return this.getNumberAttribute('entityproperty');
  }
  public set entityproperty(value: number) {
    this._entityproperty = value;
  }
  public resetEntityproperty() {
    this._entityproperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitypropertyInput() {
    return this._entityproperty;
  }

  // localname - computed: true, optional: true, required: false
  private _localname?: number; 
  public get localname() {
    return this.getNumberAttribute('localname');
  }
  public set localname(value: number) {
    this._localname = value;
  }
  public resetLocalname() {
    this._localname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localnameInput() {
    return this._localname;
  }

  // max_attributes - computed: true, optional: true, required: false
  private _maxAttributes?: number; 
  public get maxAttributes() {
    return this.getNumberAttribute('max_attributes');
  }
  public set maxAttributes(value: number) {
    this._maxAttributes = value;
  }
  public resetMaxAttributes() {
    this._maxAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttributesInput() {
    return this._maxAttributes;
  }

  // max_children - computed: true, optional: true, required: false
  private _maxChildren?: number; 
  public get maxChildren() {
    return this.getNumberAttribute('max_children');
  }
  public set maxChildren(value: number) {
    this._maxChildren = value;
  }
  public resetMaxChildren() {
    this._maxChildren = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxChildrenInput() {
    return this._maxChildren;
  }

  // max_depth - computed: true, optional: true, required: false
  private _maxDepth?: number; 
  public get maxDepth() {
    return this.getNumberAttribute('max_depth');
  }
  public set maxDepth(value: number) {
    this._maxDepth = value;
  }
  public resetMaxDepth() {
    this._maxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDepthInput() {
    return this._maxDepth;
  }

  // max_namespaces - computed: true, optional: true, required: false
  private _maxNamespaces?: number; 
  public get maxNamespaces() {
    return this.getNumberAttribute('max_namespaces');
  }
  public set maxNamespaces(value: number) {
    this._maxNamespaces = value;
  }
  public resetMaxNamespaces() {
    this._maxNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNamespacesInput() {
    return this._maxNamespaces;
  }

  // namespace_aware - computed: true, optional: true, required: false
  private _namespaceAware?: boolean | cdktf.IResolvable; 
  public get namespaceAware() {
    return this.getBooleanAttribute('namespace_aware');
  }
  public set namespaceAware(value: boolean | cdktf.IResolvable) {
    this._namespaceAware = value;
  }
  public resetNamespaceAware() {
    this._namespaceAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceAwareInput() {
    return this._namespaceAware;
  }

  // namespaceuri - computed: true, optional: true, required: false
  private _namespaceuri?: number; 
  public get namespaceuri() {
    return this.getNumberAttribute('namespaceuri');
  }
  public set namespaceuri(value: number) {
    this._namespaceuri = value;
  }
  public resetNamespaceuri() {
    this._namespaceuri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceuriInput() {
    return this._namespaceuri;
  }

  // pidata - computed: true, optional: true, required: false
  private _pidata?: number; 
  public get pidata() {
    return this.getNumberAttribute('pidata');
  }
  public set pidata(value: number) {
    this._pidata = value;
  }
  public resetPidata() {
    this._pidata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidataInput() {
    return this._pidata;
  }

  // pitarget - computed: true, optional: true, required: false
  private _pitarget?: number; 
  public get pitarget() {
    return this.getNumberAttribute('pitarget');
  }
  public set pitarget(value: number) {
    this._pitarget = value;
  }
  public resetPitarget() {
    this._pitarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitargetInput() {
    return this._pitarget;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // text - computed: true, optional: true, required: false
  private _text?: number; 
  public get text() {
    return this.getNumberAttribute('text');
  }
  public set text(value: number) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface GatewayPluginXmlThreatProtectionConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#id GatewayPluginXmlThreatProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginXmlThreatProtectionConsumerToTerraform(struct?: GatewayPluginXmlThreatProtectionConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginXmlThreatProtectionConsumerToHclTerraform(struct?: GatewayPluginXmlThreatProtectionConsumer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginXmlThreatProtectionConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginXmlThreatProtectionConsumer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginXmlThreatProtectionConsumer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginXmlThreatProtectionOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#access GatewayPluginXmlThreatProtection#access}
  */
  readonly access?: string[];
}

export function gatewayPluginXmlThreatProtectionOrderingAfterToTerraform(struct?: GatewayPluginXmlThreatProtectionOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginXmlThreatProtectionOrderingAfterToHclTerraform(struct?: GatewayPluginXmlThreatProtectionOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginXmlThreatProtectionOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginXmlThreatProtectionOrderingAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginXmlThreatProtectionOrderingAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginXmlThreatProtectionOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#access GatewayPluginXmlThreatProtection#access}
  */
  readonly access?: string[];
}

export function gatewayPluginXmlThreatProtectionOrderingBeforeToTerraform(struct?: GatewayPluginXmlThreatProtectionOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginXmlThreatProtectionOrderingBeforeToHclTerraform(struct?: GatewayPluginXmlThreatProtectionOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginXmlThreatProtectionOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginXmlThreatProtectionOrderingBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginXmlThreatProtectionOrderingBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginXmlThreatProtectionOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#after GatewayPluginXmlThreatProtection#after}
  */
  readonly after?: GatewayPluginXmlThreatProtectionOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#before GatewayPluginXmlThreatProtection#before}
  */
  readonly before?: GatewayPluginXmlThreatProtectionOrderingBefore;
}

export function gatewayPluginXmlThreatProtectionOrderingToTerraform(struct?: GatewayPluginXmlThreatProtectionOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginXmlThreatProtectionOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginXmlThreatProtectionOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginXmlThreatProtectionOrderingToHclTerraform(struct?: GatewayPluginXmlThreatProtectionOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginXmlThreatProtectionOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginXmlThreatProtectionOrderingAfter",
    },
    before: {
      value: gatewayPluginXmlThreatProtectionOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginXmlThreatProtectionOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginXmlThreatProtectionOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginXmlThreatProtectionOrdering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    if (this._before?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginXmlThreatProtectionOrdering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after.internalValue = value.after;
      this._before.internalValue = value.before;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after = new GatewayPluginXmlThreatProtectionOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginXmlThreatProtectionOrderingAfter) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: true, optional: true, required: false
  private _before = new GatewayPluginXmlThreatProtectionOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginXmlThreatProtectionOrderingBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }
}
export interface GatewayPluginXmlThreatProtectionPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#id GatewayPluginXmlThreatProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#name GatewayPluginXmlThreatProtection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#path GatewayPluginXmlThreatProtection#path}
  */
  readonly path?: string;
}

export function gatewayPluginXmlThreatProtectionPartialsToTerraform(struct?: GatewayPluginXmlThreatProtectionPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function gatewayPluginXmlThreatProtectionPartialsToHclTerraform(struct?: GatewayPluginXmlThreatProtectionPartials | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginXmlThreatProtectionPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginXmlThreatProtectionPartials | cdktf.IResolvable | undefined {
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
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginXmlThreatProtectionPartials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._path = undefined;
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
      this._path = value.path;
    }
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

  // name - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GatewayPluginXmlThreatProtectionPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginXmlThreatProtectionPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginXmlThreatProtectionPartialsOutputReference {
    return new GatewayPluginXmlThreatProtectionPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginXmlThreatProtectionRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#id GatewayPluginXmlThreatProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginXmlThreatProtectionRouteToTerraform(struct?: GatewayPluginXmlThreatProtectionRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginXmlThreatProtectionRouteToHclTerraform(struct?: GatewayPluginXmlThreatProtectionRoute | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginXmlThreatProtectionRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginXmlThreatProtectionRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginXmlThreatProtectionRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginXmlThreatProtectionService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#id GatewayPluginXmlThreatProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginXmlThreatProtectionServiceToTerraform(struct?: GatewayPluginXmlThreatProtectionService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginXmlThreatProtectionServiceToHclTerraform(struct?: GatewayPluginXmlThreatProtectionService | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginXmlThreatProtectionServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginXmlThreatProtectionService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginXmlThreatProtectionService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection konnect_gateway_plugin_xml_threat_protection}
*/
export class GatewayPluginXmlThreatProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_xml_threat_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginXmlThreatProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginXmlThreatProtection to import
  * @param importFromId The id of the existing GatewayPluginXmlThreatProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginXmlThreatProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_xml_threat_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_xml_threat_protection konnect_gateway_plugin_xml_threat_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginXmlThreatProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginXmlThreatProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_xml_threat_protection',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._consumer.internalValue = config.consumer;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ordering.internalValue = config.ordering;
    this._partials.internalValue = config.partials;
    this._protocols = config.protocols;
    this._route.internalValue = config.route;
    this._service.internalValue = config.service;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPluginXmlThreatProtectionConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginXmlThreatProtectionConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginXmlThreatProtectionConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginXmlThreatProtectionConsumer) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ordering - computed: true, optional: true, required: false
  private _ordering = new GatewayPluginXmlThreatProtectionOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginXmlThreatProtectionOrdering) {
    this._ordering.internalValue = value;
  }
  public resetOrdering() {
    this._ordering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering.internalValue;
  }

  // partials - computed: false, optional: true, required: false
  private _partials = new GatewayPluginXmlThreatProtectionPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginXmlThreatProtectionPartials[] | cdktf.IResolvable) {
    this._partials.internalValue = value;
  }
  public resetPartials() {
    this._partials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialsInput() {
    return this._partials.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // route - computed: true, optional: true, required: false
  private _route = new GatewayPluginXmlThreatProtectionRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginXmlThreatProtectionRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service = new GatewayPluginXmlThreatProtectionServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginXmlThreatProtectionService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: gatewayPluginXmlThreatProtectionConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginXmlThreatProtectionConsumerToTerraform(this._consumer.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginXmlThreatProtectionOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginXmlThreatProtectionPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginXmlThreatProtectionRouteToTerraform(this._route.internalValue),
      service: gatewayPluginXmlThreatProtectionServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginXmlThreatProtectionConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginXmlThreatProtectionConfigA",
      },
      consumer: {
        value: gatewayPluginXmlThreatProtectionConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginXmlThreatProtectionConsumer",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: gatewayPluginXmlThreatProtectionOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginXmlThreatProtectionOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginXmlThreatProtectionPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginXmlThreatProtectionPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginXmlThreatProtectionRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginXmlThreatProtectionRoute",
      },
      service: {
        value: gatewayPluginXmlThreatProtectionServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginXmlThreatProtectionService",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
