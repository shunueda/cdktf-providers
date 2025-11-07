// https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SilencedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#annotations Silenced#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#begin Silenced#begin}
  */
  readonly begin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#check Silenced#check}
  */
  readonly check: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#expire Silenced#expire}
  */
  readonly expire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#expire_on_resolve Silenced#expire_on_resolve}
  */
  readonly expireOnResolve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#id Silenced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#labels Silenced#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#namespace Silenced#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#reason Silenced#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#subscription Silenced#subscription}
  */
  readonly subscription: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced sensu_silenced}
*/
export class Silenced extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sensu_silenced";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Silenced resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Silenced to import
  * @param importFromId The id of the existing Silenced that should be imported. Refer to the {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Silenced to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sensu_silenced", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/silenced sensu_silenced} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SilencedConfig
  */
  public constructor(scope: Construct, id: string, config: SilencedConfig) {
    super(scope, id, {
      terraformResourceType: 'sensu_silenced',
      terraformGeneratorMetadata: {
        providerName: 'sensu',
        providerVersion: '0.14.0'
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
    this._begin = config.begin;
    this._check = config.check;
    this._expire = config.expire;
    this._expireOnResolve = config.expireOnResolve;
    this._id = config.id;
    this._labels = config.labels;
    this._namespace = config.namespace;
    this._reason = config.reason;
    this._subscription = config.subscription;
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

  // begin - computed: false, optional: true, required: false
  private _begin?: string; 
  public get begin() {
    return this.getStringAttribute('begin');
  }
  public set begin(value: string) {
    this._begin = value;
  }
  public resetBegin() {
    this._begin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin;
  }

  // check - computed: false, optional: false, required: true
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // expire - computed: false, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // expire_on_resolve - computed: false, optional: true, required: false
  private _expireOnResolve?: boolean | cdktf.IResolvable; 
  public get expireOnResolve() {
    return this.getBooleanAttribute('expire_on_resolve');
  }
  public set expireOnResolve(value: boolean | cdktf.IResolvable) {
    this._expireOnResolve = value;
  }
  public resetExpireOnResolve() {
    this._expireOnResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireOnResolveInput() {
    return this._expireOnResolve;
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

  // namespace - computed: true, optional: true, required: false
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

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // subscription - computed: false, optional: false, required: true
  private _subscription?: string; 
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
  public set subscription(value: string) {
    this._subscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      begin: cdktf.stringToTerraform(this._begin),
      check: cdktf.stringToTerraform(this._check),
      expire: cdktf.numberToTerraform(this._expire),
      expire_on_resolve: cdktf.booleanToTerraform(this._expireOnResolve),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      namespace: cdktf.stringToTerraform(this._namespace),
      reason: cdktf.stringToTerraform(this._reason),
      subscription: cdktf.stringToTerraform(this._subscription),
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
      begin: {
        value: cdktf.stringToHclTerraform(this._begin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check: {
        value: cdktf.stringToHclTerraform(this._check),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire: {
        value: cdktf.numberToHclTerraform(this._expire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expire_on_resolve: {
        value: cdktf.booleanToHclTerraform(this._expireOnResolve),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription: {
        value: cdktf.stringToHclTerraform(this._subscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
