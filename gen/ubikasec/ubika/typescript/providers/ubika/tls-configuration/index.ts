// https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TlsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration#metadata TlsConfiguration#metadata}
  */
  readonly metadata: TlsConfigurationMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration#spec TlsConfiguration#spec}
  */
  readonly spec: TlsConfigurationSpec;
}
export interface TlsConfigurationMetadata {
  /**
  * Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration#name TlsConfiguration#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration#namespace TlsConfiguration#namespace}
  */
  readonly namespace: string;
}

export function tlsConfigurationMetadataToTerraform(struct?: TlsConfigurationMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function tlsConfigurationMetadataToHclTerraform(struct?: TlsConfigurationMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TlsConfigurationMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TlsConfigurationMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsConfigurationMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getNumberAttribute('updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface TlsConfigurationSpec {
  /**
  * Ciphers for TLS 1.0 to 1.2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration#ciphers TlsConfiguration#ciphers}
  */
  readonly ciphers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration#protocol_max TlsConfiguration#protocol_max}
  */
  readonly protocolMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration#protocol_min TlsConfiguration#protocol_min}
  */
  readonly protocolMin?: string;
}

export function tlsConfigurationSpecToTerraform(struct?: TlsConfigurationSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ciphers),
    protocol_max: cdktf.stringToTerraform(struct!.protocolMax),
    protocol_min: cdktf.stringToTerraform(struct!.protocolMin),
  }
}


export function tlsConfigurationSpecToHclTerraform(struct?: TlsConfigurationSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ciphers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol_max: {
      value: cdktf.stringToHclTerraform(struct!.protocolMax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_min: {
      value: cdktf.stringToHclTerraform(struct!.protocolMin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TlsConfigurationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TlsConfigurationSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._protocolMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolMax = this._protocolMax;
    }
    if (this._protocolMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolMin = this._protocolMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsConfigurationSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciphers = undefined;
      this._protocolMax = undefined;
      this._protocolMin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciphers = value.ciphers;
      this._protocolMax = value.protocolMax;
      this._protocolMin = value.protocolMin;
    }
  }

  // ciphers - computed: false, optional: false, required: true
  private _ciphers?: string[]; 
  public get ciphers() {
    return cdktf.Fn.tolist(this.getListAttribute('ciphers'));
  }
  public set ciphers(value: string[]) {
    this._ciphers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // protocol_max - computed: true, optional: true, required: false
  private _protocolMax?: string; 
  public get protocolMax() {
    return this.getStringAttribute('protocol_max');
  }
  public set protocolMax(value: string) {
    this._protocolMax = value;
  }
  public resetProtocolMax() {
    this._protocolMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMaxInput() {
    return this._protocolMax;
  }

  // protocol_min - computed: true, optional: true, required: false
  private _protocolMin?: string; 
  public get protocolMin() {
    return this.getStringAttribute('protocol_min');
  }
  public set protocolMin(value: string) {
    this._protocolMin = value;
  }
  public resetProtocolMin() {
    this._protocolMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMinInput() {
    return this._protocolMin;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration ubika_tls_configuration}
*/
export class TlsConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ubika_tls_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TlsConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TlsConfiguration to import
  * @param importFromId The id of the existing TlsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TlsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ubika_tls_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/tls_configuration ubika_tls_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TlsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: TlsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'ubika_tls_configuration',
      terraformGeneratorMetadata: {
        providerName: 'ubika',
        providerVersion: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new TlsConfigurationMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: TlsConfigurationMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new TlsConfigurationSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: TlsConfigurationSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: tlsConfigurationMetadataToTerraform(this._metadata.internalValue),
      spec: tlsConfigurationSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: tlsConfigurationMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TlsConfigurationMetadata",
      },
      spec: {
        value: tlsConfigurationSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TlsConfigurationSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
