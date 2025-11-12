// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancePagespeedProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#combine_css LoadBalancePagespeedProfile#combine_css}
  */
  readonly combineCss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#css LoadBalancePagespeedProfile#css}
  */
  readonly css?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#html LoadBalancePagespeedProfile#html}
  */
  readonly html?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#id LoadBalancePagespeedProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#image LoadBalancePagespeedProfile#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#jpeg_sampling LoadBalancePagespeedProfile#jpeg_sampling}
  */
  readonly jpegSampling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#max_combine_css_byte LoadBalancePagespeedProfile#max_combine_css_byte}
  */
  readonly maxCombineCssByte?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#mkey LoadBalancePagespeedProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#move_css_to_head LoadBalancePagespeedProfile#move_css_to_head}
  */
  readonly moveCssToHead?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#resize_image LoadBalancePagespeedProfile#resize_image}
  */
  readonly resizeImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#vdom LoadBalancePagespeedProfile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile fortiadc_load_balance_pagespeed_profile}
*/
export class LoadBalancePagespeedProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_pagespeed_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancePagespeedProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancePagespeedProfile to import
  * @param importFromId The id of the existing LoadBalancePagespeedProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancePagespeedProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_pagespeed_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_profile fortiadc_load_balance_pagespeed_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancePagespeedProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancePagespeedProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_pagespeed_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._combineCss = config.combineCss;
    this._css = config.css;
    this._html = config.html;
    this._id = config.id;
    this._image = config.image;
    this._jpegSampling = config.jpegSampling;
    this._maxCombineCssByte = config.maxCombineCssByte;
    this._mkey = config.mkey;
    this._moveCssToHead = config.moveCssToHead;
    this._resizeImage = config.resizeImage;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // combine_css - computed: true, optional: true, required: false
  private _combineCss?: string; 
  public get combineCss() {
    return this.getStringAttribute('combine_css');
  }
  public set combineCss(value: string) {
    this._combineCss = value;
  }
  public resetCombineCss() {
    this._combineCss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combineCssInput() {
    return this._combineCss;
  }

  // css - computed: true, optional: true, required: false
  private _css?: string; 
  public get css() {
    return this.getStringAttribute('css');
  }
  public set css(value: string) {
    this._css = value;
  }
  public resetCss() {
    this._css = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssInput() {
    return this._css;
  }

  // html - computed: true, optional: true, required: false
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  public resetHtml() {
    this._html = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
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

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // jpeg_sampling - computed: true, optional: true, required: false
  private _jpegSampling?: string; 
  public get jpegSampling() {
    return this.getStringAttribute('jpeg_sampling');
  }
  public set jpegSampling(value: string) {
    this._jpegSampling = value;
  }
  public resetJpegSampling() {
    this._jpegSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpegSamplingInput() {
    return this._jpegSampling;
  }

  // max_combine_css_byte - computed: true, optional: true, required: false
  private _maxCombineCssByte?: string; 
  public get maxCombineCssByte() {
    return this.getStringAttribute('max_combine_css_byte');
  }
  public set maxCombineCssByte(value: string) {
    this._maxCombineCssByte = value;
  }
  public resetMaxCombineCssByte() {
    this._maxCombineCssByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCombineCssByteInput() {
    return this._maxCombineCssByte;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // move_css_to_head - computed: true, optional: true, required: false
  private _moveCssToHead?: string; 
  public get moveCssToHead() {
    return this.getStringAttribute('move_css_to_head');
  }
  public set moveCssToHead(value: string) {
    this._moveCssToHead = value;
  }
  public resetMoveCssToHead() {
    this._moveCssToHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveCssToHeadInput() {
    return this._moveCssToHead;
  }

  // resize_image - computed: true, optional: true, required: false
  private _resizeImage?: string; 
  public get resizeImage() {
    return this.getStringAttribute('resize_image');
  }
  public set resizeImage(value: string) {
    this._resizeImage = value;
  }
  public resetResizeImage() {
    this._resizeImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeImageInput() {
    return this._resizeImage;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      combine_css: cdktf.stringToTerraform(this._combineCss),
      css: cdktf.stringToTerraform(this._css),
      html: cdktf.stringToTerraform(this._html),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      jpeg_sampling: cdktf.stringToTerraform(this._jpegSampling),
      max_combine_css_byte: cdktf.stringToTerraform(this._maxCombineCssByte),
      mkey: cdktf.stringToTerraform(this._mkey),
      move_css_to_head: cdktf.stringToTerraform(this._moveCssToHead),
      resize_image: cdktf.stringToTerraform(this._resizeImage),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      combine_css: {
        value: cdktf.stringToHclTerraform(this._combineCss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      css: {
        value: cdktf.stringToHclTerraform(this._css),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      html: {
        value: cdktf.stringToHclTerraform(this._html),
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
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jpeg_sampling: {
        value: cdktf.stringToHclTerraform(this._jpegSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_combine_css_byte: {
        value: cdktf.stringToHclTerraform(this._maxCombineCssByte),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      move_css_to_head: {
        value: cdktf.stringToHclTerraform(this._moveCssToHead),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resize_image: {
        value: cdktf.stringToHclTerraform(this._resizeImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
